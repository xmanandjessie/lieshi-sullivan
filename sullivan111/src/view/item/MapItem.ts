class MapItem extends egret.DisplayObjectContainer {
	public constructor() {
		super();
	}

	public setData(list): void {
		if (list) {
			var len = list.length;
			for (var i = 0; i < len; i++) {
				var obj = list[i];
				if (obj) {
					var img = new CustomImage("resource/assets/asyn/map/map" + obj.pic + "_1.png", true, () => {
						img.x = Global.posList[0][(obj.pic - 1)];
						img.y = Global.posList[1][(obj.pic - 1)];
					});
					this.addChild(img);
				}
			}
		}
	}
}