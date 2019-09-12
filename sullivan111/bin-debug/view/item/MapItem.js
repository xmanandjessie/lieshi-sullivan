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
    function MapItem() {
        return _super.call(this) || this;
    }
    MapItem.prototype.setData = function (list) {
        if (list) {
            var len = list.length;
            for (var i = 0; i < len; i++) {
                var obj = list[i];
                if (obj) {
                    var img = new CustomImage("resource/assets/asyn/map/map" + obj.pic + "_1.png", true, function () {
                        img.x = Global.posList[0][(obj.pic - 1)];
                        img.y = Global.posList[1][(obj.pic - 1)];
                    });
                    this.addChild(img);
                }
            }
        }
    };
    return MapItem;
}(egret.DisplayObjectContainer));
__reflect(MapItem.prototype, "MapItem");
//# sourceMappingURL=MapItem.js.map