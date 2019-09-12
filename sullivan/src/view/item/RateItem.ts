class RateItem extends egret.DisplayObjectContainer {
	public constructor() {
		super();
	}

	public setData(index, list): void {
		var obj;
		if (list) {
			var id = Global.idList[index - 1];
			for (var i = 0; i < list.length; i++) {
				if (id == list[i].stockid) {
					obj = list[i];
				}
			}
		}

		var bg = new CustomImage("resource/assets/asyn/rate/rate" + index + ".png", true, () => {
			// bg.x = 0
			// bg.y = 0;
		});
		this.addChild(bg);

		if (obj) {
			if (obj.state != "SENDED") {
				var used = new CustomImage("resource/assets/asyn/rate/used.png", true, () => {
				});
				this.addChild(used);
			}
		}

		// var used = new CustomImage("resource/assets/asyn/rate/used.png", true, () => {
		// });
		// this.addChild(used);

		var btnShare = new CustomImage("resource/assets/asyn/rate/btn_share.png", true, () => {
			btnShare.x = 23;
			btnShare.y = 92;
		});
		this.addChild(btnShare);

		var btnDesc = new CustomImage("resource/assets/asyn/rate/btn_desc.png", true, () => {
			btnDesc.x = 108
			btnDesc.y = 92;
		});
		this.addChild(btnDesc);

		Global.setBut(btnShare);
		Global.setBut(btnDesc);
		btnShare.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			PopManager.showPop("SharePop");
		}, this);
		btnDesc.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			PopManager.showPop("DescPop", index);
		}, this);
	}
}