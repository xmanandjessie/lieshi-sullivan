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
var DengItem = (function (_super) {
    __extends(DengItem, _super);
    function DengItem() {
        var _this = _super.call(this) || this;
        var deng1 = new CustomImage("resource/assets/asyn/self/deng1.png", true, function () {
            deng1.x = 291;
            deng1.y = 70;
            egret.Tween.get(deng1, { loop: true }).to({ y: 100 }, 2000).to({ y: 70 }, 2000);
        });
        _this.addChild(deng1);
        var deng2 = new CustomImage("resource/assets/asyn/self/deng2.png", true, function () {
            deng2.x = -200;
            deng2.y = 800;
            egret.Tween.get(deng2, { loop: true }).to({ rotation: 3 }, 1000).to({ rotation: 0 }, 1000);
            egret.Tween.get(deng2, { loop: true }).to({ x: StageUtils.SW, y: 200 }, 20000).to({ x: -200, y: 800 }, 0).to({}, 5000);
        });
        _this.addChild(deng2);
        return _this;
    }
    return DengItem;
}(egret.DisplayObjectContainer));
__reflect(DengItem.prototype, "DengItem");
//# sourceMappingURL=DengItem.js.map