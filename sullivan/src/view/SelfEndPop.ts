class SelfEndPop extends PopView {
	private container: egret.DisplayObjectContainer;

	public constructor() {
		super();
	}

	public setData(data): void {
		this.container = new egret.DisplayObjectContainer();

		var scroll: egret.ScrollView = new egret.ScrollView();
		scroll.setContent(this.container);
		scroll.horizontalScrollPolicy = "off";
		scroll.scrollSpeed = 0.5;
		this.addChild(scroll);
		scroll.x = 0;
		scroll.y = 0;
		scroll.width = StageUtils.SW;
		scroll.height = StageUtils.SH;

		var bg = new egret.Shape()
		bg.graphics.beginFill(0x0);
		bg.graphics.drawRect(0, 0, StageUtils.stage.stageWidth, 1970);
		bg.graphics.endFill();
		this.container.addChild(bg);

		var title = new CustomImage("resource/assets/asyn/reward/bg.png", true, () => {
			title.x = StageUtils.SW - title.width >> 1;
			title.y = 50;
		});
		this.container.addChild(title);

		var arrow = new CustomImage("resource/assets/asyn/arrow.png", true, () => {
			arrow.x = StageUtils.SW - arrow.width >> 1;
		});
		arrow.y = StageUtils.SH - 40;
		this.container.addChild(arrow);

		egret.Tween.get(arrow, { loop: true }).to({ y: StageUtils.SH - 50 }, 500).to({ y: StageUtils.SH - 40 }, 500);

		for (var i = 0; i < 6; i++) {
			var rateItem = new RateItem();
			rateItem.setData(i + 1, data.coups);
			rateItem.x = StageUtils.SW - 556 >> 1;
			rateItem.y = 840 + i * 190;
			this.container.addChild(rateItem);
		}

		if (data.isprize == 1) {
			//已领
			var reward = new CustomImage("resource/assets/asyn/reward/reward1.png", true, () => {
				reward.x = StageUtils.SW - reward.width >> 1;
				reward.y = 190;
			});
			this.container.addChild(reward);
			Message.show("您已领取过该兑换券");
		} else {
			Global.post("prize", {}).then((res: any) => {
				if (res) {
					if (res.code == 20000) {
						var reward = new CustomImage("resource/assets/asyn/reward/reward1.png", true, () => {
							reward.x = StageUtils.SW - reward.width >> 1;
							reward.y = 190;
						});
						this.container.addChild(reward);

						this.checkStataus(data);
					} else {
						if (res.msg == "你已领取过该代金券") {
							var reward = new CustomImage("resource/assets/asyn/reward/reward1.png", true, () => {
								reward.x = StageUtils.SW - reward.width >> 1;
								reward.y = 190;
							});
							this.container.addChild(reward);
							this.checkStataus(data);
						}
						Message.show(res.msg);
					}
				}
			});
		}
	}

	private checkStataus(data): void {
		var obj;
		var list = data.coups;
		if (list) {
			var id = Global.idList[6];
			for (var i = 0; i < list.length; i++) {
				if (id == list[i].stockid) {
					obj = list[i];
				}
			}

			if (obj) {
				if (obj.state != "SENDED") {
					var used = new CustomImage("resource/assets/asyn/rate/used.png", true, () => {
						used.y = 100;
					});
					this.container.addChild(used);
				}
			}
		}
	}
}