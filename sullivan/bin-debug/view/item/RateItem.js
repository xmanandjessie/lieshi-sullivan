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
var RateItem = (function (_super) {
    __extends(RateItem, _super);
    function RateItem() {
        return _super.call(this) || this;
    }
    RateItem.prototype.setData = function (index, list) {
        var obj;
        if (list) {
            var id = Global.idList[index - 1];
            for (var i = 0; i < list.length; i++) {
                if (id == list[i].stockid) {
                    obj = list[i];
                }
            }
        }
        var bg = new CustomImage("resource/assets/asyn/rate/rate" + index + ".png", true, function () {
            // bg.x = 0
            // bg.y = 0;
        });
        this.addChild(bg);
        if (obj) {
            if (obj.state != "SENDED") {
                var used = new CustomImage("resource/assets/asyn/rate/used.png", true, function () {
                });
                this.addChild(used);
            }
        }
        // var used = new CustomImage("resource/assets/asyn/rate/used.png", true, () => {
        // });
        // this.addChild(used);
        var btnShare = new CustomImage("resource/assets/asyn/rate/btn_share.png", true, function () {
            btnShare.x = 23;
            btnShare.y = 92;
        });
        this.addChild(btnShare);
        var btnDesc = new CustomImage("resource/assets/asyn/rate/btn_desc.png", true, function () {
            btnDesc.x = 108;
            btnDesc.y = 92;
        });
        this.addChild(btnDesc);
        Global.setBut(btnShare);
        Global.setBut(btnDesc);
        btnShare.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            PopManager.showPop("SharePop");
        }, this);
        btnDesc.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            PopManager.showPop("DescPop", index);
        }, this);
    };
    return RateItem;
}(egret.DisplayObjectContainer));
__reflect(RateItem.prototype, "RateItem");
//# sourceMappingURL=RateItem.js.map