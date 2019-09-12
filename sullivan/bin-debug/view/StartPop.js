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
var StartPop = (function (_super) {
    __extends(StartPop, _super);
    function StartPop() {
        return _super.call(this) || this;
    }
    StartPop.prototype.setData = function (data) {
        _super.prototype.setData.call(this, data);
        var bg = new CustomImage("resource/assets/asyn/loading/loading_bg.jpg", true, function () {
            bg.width = StageUtils.SW;
            bg.height = StageUtils.SH;
        });
        this.addChild(bg);
        var btnInto = new CustomImage("resource/assets/asyn/loading/btn_into.png", true, function () {
            btnInto.x = StageUtils.SW - btnInto.width >> 1;
            btnInto.y = StageUtils.SH - 100;
        });
        this.addChild(btnInto);
        Global.setBut(btnInto);
        btnInto.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            PopManager.hidePop("StartPop");
            PopManager.showPop("SelfPop", data);
        }, this);
    };
    return StartPop;
}(PopView));
__reflect(StartPop.prototype, "StartPop");
//# sourceMappingURL=StartPop.js.map