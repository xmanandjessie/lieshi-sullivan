class MapItem extends egret.DisplayObjectContainer {
	private type;
	public constructor(type) {
		super();
		this.type = type;
	}

	public setData(list): void {
		for (var j = 0; j < 8; j++) {
			var isAdd = false;
			if (list) {
				var len = list.length;
				for (var i = 0; i < len; i++) {
					let obj = list[i];
					if (obj) {
						if (obj.pic == j + 1) {
							this.addItem(obj.pic);
							isAdd = true;
							break;
						}
					}
				}
			}
			if (!isAdd) {
				this.addItem(j + 1, 0);
			}
		}
	}

	public addItem(pic, status = 1): void {
		let img: any = new CustomImage("resource/assets/asyn/map/map" + pic + "_" + status + ".png", true, () => {
			img.x = Global.posList[0][(pic - 1)];
			img.y = Global.posList[1][(pic - 1)];
		});
		this.addChild(img);
		// if (status == 0) {
		// 	Global.setBut(img);
		// 	img.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
		// 		StageUtils.stage.dispatchEventWith("map_item_click",false,pic);
		// 		if(this.type == "self")
		// 		{
		// 			Message.show("分享给好友，点亮全部地图");
		// 		}
		// 	}, this);
		// }
		Global.setBut(img);
		img.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
			if (this.type == "self") {
				Message.show("分享给好友，点亮全部地图");
			} else {
				if (status == 0) {
					StageUtils.stage.dispatchEventWith("map_item_click", false, pic);
				} else {
					Message.show("这块地图已经点亮了哦~");
				}
			}
		}, this);
	}

	public updateItem(pic): void {
		if (this.numChildren >= pic) {
			let img: CustomImage = this.getChildAt(pic - 1) as CustomImage;
			if (img) {
				img.reload("resource/assets/asyn/map/map" + pic + "_1.png");
				img.touchEnabled = false;
			}
		}
	}
}