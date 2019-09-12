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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        StageUtils.registStage(this.stage);
        this.addChild(UIManager.instance);
        this.getData();
        this.createGameScene();
    };
    /**
     * 创建游戏场景
     * Create a game scene
     */
    Main.prototype.createGameScene = function () {
        if (Main.openid) {
            if (Main.other && Main.other != Main.openid) {
                Global.post("info", { other: Main.other }).then(function (res) {
                    if (res && res.code == 20000 && res.data) {
                        PopManager.showPop("ShareLandPop", res.data);
                    }
                    else {
                        PopManager.showPop("ErrorPop");
                    }
                });
            }
            else {
                //正常进入
                UIManager.instance.initSelf();
            }
        }
        else {
            PopManager.showPop("ErrorPop");
        }
    };
    Main.prototype.getData = function () {
        var openid = Global.getQueryString("openId");
        var other = Global.getQueryString("other");
        if (openid && openid != 'null' && openid != 'undefined') {
            Main.openid = openid;
        }
        if (other && other != 'null' && openid != 'undefined') {
            Main.other = other;
        }
    };
    Main.ROOT = "http://als.ha0y.cn/wechat/game/";
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map