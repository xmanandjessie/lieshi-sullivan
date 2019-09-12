var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MapItem = (function (_super) {
    __extends(MapItem, _super);
    function MapItem(type) {
        var _this = _super.call(this) || this;
        _this.type = type;
        return _this;
    }
    MapItem.prototype.setData = function (list) {
        for (var j = 0; j < 8; j++) {
            var isAdd = false;
            if (list) {
                var len = list.length;
                for (var i = 0; i < len; i++) {
                    var obj = list[i];
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
    };
    MapItem.prototype.addItem = function (pic, status) {
        var _this = this;
        if (status === void 0) { status = 1; }
        var img = new CustomImage("resource/assets/asyn/map/map" + pic + "_" + status + ".png", true, function () {
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
        img.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            if (_this.type == "self") {
                Message.show("分享给好友，点亮全部地图");
            }
            else {
                if (status == 0) {
                    StageUtils.stage.dispatchEventWith("map_item_click", false, pic);
                }
                else {
                    Message.show("这块地图已经点亮了哦~");
                }
            }
        }, this);
    };
    MapItem.prototype.updateItem = function (pic) {
        if (this.numChildren >= pic) {
            var img = this.getChildAt(pic - 1);
            if (img) {
                img.reload("resource/assets/asyn/map/map" + pic + "_1.png");
                img.touchEnabled = false;
            }
        }
    };
    return MapItem;
}(egret.DisplayObjectContainer));
__reflect(MapItem.prototype, "MapItem");
//# sourceMappingURL=MapItem.js.map