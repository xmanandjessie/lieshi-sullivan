class SelfPop extends PopView {
	private container: egret.DisplayObjectContainer;

	public constructor() {
		super();
	}

	public setData(data): void {
		this.container = new egret.DisplayObjectContainer();
		this.container.height = 1930;

		var scroll: egret.ScrollView = new egret.ScrollView();
		scroll.setContent(this.container);
		scroll.horizontalScrollPolicy = "off";
		scroll.scrollSpeed = 0.5;
		this.addChild(scroll);
		scroll.x = 0;
		scroll.y = -50;
		scroll.width = StageUtils.SW;
		scroll.height = StageUtils.SH + 50;
		var bg = new CustomImage("resource/assets/asyn/self/bg.png", true, () => {
			bg.width = StageUtils.SW;
			bg.height = 1970;
		});
		this.container.addChild(bg);

		var title = new CustomImage("resource/assets/asyn/self/title.png", true, () => {
			title.x = StageUtils.SW - title.width >> 1;
			title.y = 30 + 50;
		});
		this.container.addChild(title);

		var map = new MapItem("self");
		map.setData(data.info);
		this.container.addChild(map);

		var deng = new DengItem();
		this.addChild(deng);

		var title1 = new CustomImage("resource/assets/asyn/self/title1.png", true, () => {
			title1.x = StageUtils.CW;
			title1.y = StageUtils.SH - 111 + title1.height;

			egret.Tween.get(title1,{loop:true}).to({ scaleX: 1.2, scaleY: 1.2 }, 500, egret.Ease.backIn).to({ scaleX: 1, scaleY: 1 },500,egret.Ease.backOut);
		});
		title1.anchorOffsetX = 377 >> 1;
		title1.anchorOffsetY = 72;
		this.container.addChild(title1);

		var arrow = new CustomImage("resource/assets/asyn/arrow.png", true, () => {
			arrow.x = StageUtils.SW - arrow.width >> 1;
		});
		arrow.y = StageUtils.SH - 30;
		this.container.addChild(arrow);

		for (var i = 0; i < 6; i++) {
			var rateItem = new RateItem();
			rateItem.setData(i + 1,data.coups);
			rateItem.x = StageUtils.SW - 556 >> 1;
			rateItem.y = 1020 + i * 150;
			this.container.addChild(rateItem);
		}

		egret.Tween.get(arrow, { loop: true }).to({ y: StageUtils.SH - 50 }, 500).to({ y: StageUtils.SH - 30 }, 500);


		if (data.iscard == 1) {
			//领过
		} else {
			//没领
			Global.post("card", {}).then((res: any) => {
				if (res && res.code != 20000) {
					if(res.msg != "你已领取过该代金券")
					{
						Message.show(res.msg);
					}
				} else {


				}
			});
		}

	}
}