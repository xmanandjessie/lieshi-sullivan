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
var SelfEndPop = (function (_super) {
    __extends(SelfEndPop, _super);
    function SelfEndPop() {
        return _super.call(this) || this;
    }
    SelfEndPop.prototype.setData = function (data) {
        var _this = this;
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
        var bg = new egret.Shape();
        bg.graphics.beginFill(0x0);
        bg.graphics.drawRect(0, 0, StageUtils.stage.stageWidth, 1970);
        bg.graphics.endFill();
        this.container.addChild(bg);
        var title = new CustomImage("resource/assets/asyn/reward/bg.png", true, function () {
            title.x = StageUtils.SW - title.width >> 1;
            title.y = 50;
        });
        this.container.addChild(title);
        var arrow = new CustomImage("resource/assets/asyn/arrow.png", true, function () {
            arrow.x = StageUtils.SW - arrow.width >> 1;
        });
        arrow.y = StageUtils.SH - 40;
        this.container.addChild(arrow);
        egret.Tween.get(arrow, { loop: true }).to({ y: StageUtils.SH - 50 }, 500).to({ y: StageUtils.SH - 40 }, 500);
        for (var i = 0; i < 6; i++) {
            var rateItem = new RateItem();
            rateItem.setData(i + 1, data.coups);
            rateItem.x = StageUtils.SW - 556 >> 1;
            rateItem.y = 840 + i * 190;
            this.container.addChild(rateItem);
        }
        if (data.isprize == 1) {
            //已领
            var reward = new CustomImage("resource/assets/asyn/reward/reward1.png", true, function () {
                reward.x = StageUtils.SW - reward.width >> 1;
                reward.y = 190;
            });
            this.container.addChild(reward);
            Message.show("您已领取过该兑换券");
        }
        else {
            Global.post("prize", {}).then(function (res) {
                if (res) {
                    if (res.code == 20000) {
                        var reward = new CustomImage("resource/assets/asyn/reward/reward1.png", true, function () {
                            reward.x = StageUtils.SW - reward.width >> 1;
                            reward.y = 190;
                        });
                        _this.container.addChild(reward);
                        _this.checkStataus(data);
                    }
                    else {
                        if (res.msg == "你已领取过该代金券") {
                            var reward = new CustomImage("resource/assets/asyn/reward/reward1.png", true, function () {
                                reward.x = StageUtils.SW - reward.width >> 1;
                                reward.y = 190;
                            });
                            _this.container.addChild(reward);
                            _this.checkStataus(data);
                        }
                        Message.show(res.msg);
                    }
                }
            });
        }
    };
    SelfEndPop.prototype.checkStataus = function (data) {
        var obj;
        var list = data.coups;
        if (list) {
            var id = Global.idList[6];
            for (var i = 0; i < list.length; i++) {
                if (id == list[i].stockid) {
                    obj = list[i];
                }
            }
            if (obj) {
                if (obj.state != "SENDED") {
                    var used = new CustomImage("resource/assets/asyn/rate/used.png", true, function () {
                        used.y = 100;
                    });
                    this.container.addChild(used);
                }
            }
        }
    };
    return SelfEndPop;
}(PopView));
__reflect(SelfEndPop.prototype, "SelfEndPop");
//# sourceMappingURL=SelfEndPop.js.map