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
var ShareLandPop = (function (_super) {
    __extends(ShareLandPop, _super);
    function ShareLandPop() {
        return _super.call(this) || this;
    }
    ShareLandPop.prototype.show = function () {
        var bg = new egret.Shape();
        bg.graphics.beginFill(0x0, 0.01);
        bg.graphics.drawRect(0, 0, StageUtils.stage.stageWidth, StageUtils.stage.stageHeight - 130);
        bg.graphics.endFill();
        this.addChildAt(bg, 0);
        UIManager.instance.popLayer.addChild(this);
        this.touchEnabled = true;
    };
    ShareLandPop.prototype.setData = function (data) {
        _super.prototype.setData.call(this, data);
        var bg = new CustomImage("resource/assets/asyn/self/bg.png", true, function () {
            bg.width = StageUtils.SW;
            bg.height = 1970;
        });
        this.addChild(bg);
        var title = new CustomImage("resource/assets/asyn/share/logo.png", true, function () {
            title.x = 30;
            title.y = 30;
        });
        this.addChild(title);
        var map = new MapItem("share");
        map.setData(data.info);
        this.addChild(map);
        this.map = map;
        var mouse = new CustomImage("resource/assets/asyn/mouse.png", true, function () {
            mouse.x = 30;
            mouse.y = 700;
        });
        this.addChild(mouse);
        egret.Tween.get(mouse, { loop: true }).to({ scaleX: 1.1, scaleY: 1.1, rotation: 6 }, 500, egret.Ease.backIn).to({ scaleX: 1, scaleY: 1, rotation: 0 }, 500, egret.Ease.backOut);
        var deng = new DengItem();
        this.addChild(deng);
        var btnInto = new CustomImage("resource/assets/asyn/share/btn_into.png", true, function () {
            btnInto.x = StageUtils.SW - btnInto.width >> 1;
            btnInto.y = StageUtils.SH - 100;
        });
        this.addChild(btnInto);
        Global.setBut(btnInto);
        btnInto.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            e.stopPropagation();
            e.stopImmediatePropagation();
            PopManager.hidePop("ShareLandPop");
            UIManager.instance.initSelf();
        }, this);
        StageUtils.stage.addEventListener("map_item_click", this.mapItemClickHandler, this);
    };
    ShareLandPop.prototype.mapItemClickHandler = function (e) {
        var _this = this;
        console.log(e.data);
        if (this.data) {
            if (this.data.info) {
                for (var i = 0; i < this.data.info.length; i++) {
                    if (this.data.info[i]) {
                        if (this.data.info[i].otheropenid == Main.openid || this.data.info[i].openid == Main.openid) {
                            Message.show("您已帮Ta点亮拼图，每人仅限点亮一块拼图");
                            return;
                        }
                    }
                }
            }
            StageUtils.stage.removeEventListener("map_item_click", this.mapItemClickHandler, this);
            console.log("map click");
            var pid_1 = e.data;
            Global.post("play", { other: Main.other, pid: pid_1 }).then(function (res) {
                if (res && res.code == 20000) {
                    _this.map.updateItem(pid_1);
                    Message.show("成功帮助好友点亮地图，你也去试试吧~");
                }
            });
        }
    };
    ShareLandPop.prototype.hide = function () {
        _super.prototype.hide.call(this);
        StageUtils.stage.removeEventListener("map_item_click", this.mapItemClickHandler, this);
    };
    return ShareLandPop;
}(PopView));
__reflect(ShareLandPop.prototype, "ShareLandPop");
//# sourceMappingURL=ShareLandPop.js.map