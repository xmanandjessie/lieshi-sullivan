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
var SelfPop = (function (_super) {
    __extends(SelfPop, _super);
    function SelfPop() {
        return _super.call(this) || this;
    }
    SelfPop.prototype.setData = function (list) {
        this.container = new egret.DisplayObjectContainer();
        var scroll = new egret.ScrollView();
        scroll.setContent(this.container);
        scroll.horizontalScrollPolicy = "off";
        scroll.scrollSpeed = 0.5;
        this.addChild(scroll);
        scroll.x = 0;
        scroll.y = 0;
        scroll.width = StageUtils.SW;
        scroll.height = StageUtils.SH;
        var bg = new CustomImage("resource/assets/asyn/self/bg.png", true, function () {
            bg.width = StageUtils.SW;
            bg.height = 1871;
        });
        this.container.addChild(bg);
        var title = new CustomImage("resource/assets/asyn/self/title.png", true, function () {
            title.x = StageUtils.SW - title.width >> 1;
            title.y = 50;
        });
        this.container.addChild(title);
        var deng1 = new CustomImage("resource/assets/asyn/self/deng1.png", true, function () {
            deng1.x = 291;
            deng1.y = 70;
        });
        this.container.addChild(deng1);
        var deng2 = new CustomImage("resource/assets/asyn/self/deng2.png", true, function () {
            deng2.x = 438;
            deng2.y = 269;
        });
        this.container.addChild(deng2);
        for (var i = 0; i < 5; i++) {
            var rateItem = new RateItem();
            rateItem.setData(i + 1);
            rateItem.x = StageUtils.SW - 556 >> 1;
            rateItem.y = 1070 + i * 160;
            this.container.addChild(rateItem);
        }
    };
    return SelfPop;
}(PopView));
__reflect(SelfPop.prototype, "SelfPop");
//# sourceMappingURL=SelfPop.js.map