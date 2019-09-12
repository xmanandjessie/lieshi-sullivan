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
    SelfPop.prototype.setData = function (data) {
        this.container = new egret.DisplayObjectContainer();
        this.container.height = 1930;
        var scroll = new egret.ScrollView();
        scroll.setContent(this.container);
        scroll.horizontalScrollPolicy = "off";
        scroll.scrollSpeed = 0.5;
        this.addChild(scroll);
        scroll.x = 0;
        scroll.y = -50;
        scroll.width = StageUtils.SW;
        scroll.height = StageUtils.SH + 50;
        var bg = new CustomImage("resource/assets/asyn/self/bg.png", true, function () {
            bg.width = StageUtils.SW;
            bg.height = 1970;
        });
        this.container.addChild(bg);
        var title = new CustomImage("resource/assets/asyn/self/title.png", true, function () {
            title.x = StageUtils.SW - title.width >> 1;
            title.y = 30 + 50;
        });
        this.container.addChild(title);
        var map = new MapItem("self");
        map.setData(data.info);
        this.container.addChild(map);
        var deng = new DengItem();
        this.addChild(deng);
        var title1 = new CustomImage("resource/assets/asyn/self/title1.png", true, function () {
            title1.x = StageUtils.CW;
            title1.y = StageUtils.SH - 111 + title1.height;
            egret.Tween.get(title1, { loop: true }).to({ scaleX: 1.2, scaleY: 1.2 }, 500, egret.Ease.backIn).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.backOut);
        });
        title1.anchorOffsetX = 377 >> 1;
        title1.anchorOffsetY = 72;
        this.container.addChild(title1);
        var arrow = new CustomImage("resource/assets/asyn/arrow.png", true, function () {
            arrow.x = StageUtils.SW - arrow.width >> 1;
        });
        arrow.y = StageUtils.SH - 30;
        this.container.addChild(arrow);
        for (var i = 0; i < 6; i++) {
            var rateItem = new RateItem();
            rateItem.setData(i + 1, data.coups);
            rateItem.x = StageUtils.SW - 556 >> 1;
            rateItem.y = 1020 + i * 150;
            this.container.addChild(rateItem);
        }
        egret.Tween.get(arrow, { loop: true }).to({ y: StageUtils.SH - 50 }, 500).to({ y: StageUtils.SH - 30 }, 500);
        if (data.iscard == 1) {
            //领过
        }
        else {
            //没领
            Global.post("card", {}).then(function (res) {
                if (res && res.code != 20000) {
                    if (res.msg != "你已领取过该代金券") {
                        Message.show(res.msg);
                    }
                }
                else {
                }
            });
        }
    };
    return SelfPop;
}(PopView));
__reflect(SelfPop.prototype, "SelfPop");
//# sourceMappingURL=SelfPop.js.map