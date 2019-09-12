class ShareLandPop extends PopView {
	private map: MapItem;
	public constructor() {
		super();
	}

	public show(): void {
		var bg = new egret.Shape()
		bg.graphics.beginFill(0x0, 0.01);
		bg.graphics.drawRect(0, 0, StageUtils.stage.stageWidth, StageUtils.stage.stageHeight - 130);
		bg.graphics.endFill();

		this.addChildAt(bg, 0);

		UIManager.instance.popLayer.addChild(this);
		this.touchEnabled = true;
	}

	public setData(data): void {
		super.setData(data);
		var bg = new CustomImage("resource/assets/asyn/self/bg.png", true, () => {
			bg.width = StageUtils.SW;
			bg.height = 1970;
		});
		this.addChild(bg);

		var title = new CustomImage("resource/assets/asyn/share/logo.png", true, () => {
			title.x = 30;
			title.y = 30;
		});
		this.addChild(title);

		var map = new MapItem("share");
		map.setData(data.info);
		this.addChild(map);
		this.map = map;

		var mouse = new CustomImage("resource/assets/asyn/mouse.png", true, () => {
			mouse.x = 30;
			mouse.y = 700;
		});
		this.addChild(mouse);
		egret.Tween.get(mouse, { loop: true }).to({ scaleX: 1.1, scaleY: 1.1, rotation: 6 }, 500, egret.Ease.backIn).to({ scaleX: 1, scaleY: 1, rotation: 0 }, 500, egret.Ease.backOut);


		var deng = new DengItem();
		this.addChild(deng);

		var btnInto = new CustomImage("resource/assets/asyn/share/btn_into.png", true, () => {
			btnInto.x = StageUtils.SW - btnInto.width >> 1
			btnInto.y = StageUtils.SH - 100;
		});
		this.addChild(btnInto);
		Global.setBut(btnInto);
		btnInto.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
			e.stopPropagation();
			e.stopImmediatePropagation();
			PopManager.hidePop("ShareLandPop");
			UIManager.instance.initSelf();
		}, this);

		StageUtils.stage.addEventListener("map_item_click", this.mapItemClickHandler, this);
	}

	private mapItemClickHandler(e: egret.Event): void {
		console.log(e.data);
		if (this.data) {
			if (this.data.info) {
				for (var i = 0; i < this.data.info.length; i++) {
					if (this.data.info[i]) {
						if (this.data.info[i].otheropenid == Main.openid || this.data.info[i].openid == Main.openid) {
							Message.show("您已帮Ta点亮拼图，每人仅限点亮一块拼图");
							return;
						}
					}
				}
			}
			StageUtils.stage.removeEventListener("map_item_click", this.mapItemClickHandler, this);
			console.log("map click");
			let pid = e.data;
			Global.post("play", { other: Main.other, pid: pid }).then((res: any) => {
				if (res && res.code == 20000) {
					this.map.updateItem(pid);
					Message.show("成功帮助好友点亮地图，你也去试试吧~");
				}
			});
		}
	}

	public hide(): void {
		super.hide();
		StageUtils.stage.removeEventListener("map_item_click", this.mapItemClickHandler, this);
	}
}