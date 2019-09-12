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
var UIManager = (function (_super) {
    __extends(UIManager, _super);
    function UIManager() {
        var _this = _super.call(this) || this;
        _this.initLayer();
        return _this;
    }
    Object.defineProperty(UIManager, "instance", {
        get: function () {
            if (!UIManager._instance) {
                UIManager._instance = new UIManager();
            }
            return UIManager._instance;
        },
        enumerable: true,
        configurable: true
    });
    UIManager.prototype.initLayer = function () {
        this.mainUILayer = new egret.DisplayObjectContainer();
        this.addChild(this.mainUILayer);
        this.popLayer = new egret.DisplayObjectContainer();
        this.addChild(this.popLayer);
        this.topLayer = new egret.DisplayObjectContainer();
        this.addChild(this.topLayer);
    };
    UIManager.prototype.initSelf = function () {
        //正常进入
        Global.post("info", {}).then(function (res) {
            if (res && res.code == 20000 && res.data) {
                // res.data.info = [
                // 	{"openid":"oJH5qs1LgfLEq-u6jnA8Hy6qQnvc","otheropenid":"oJH5qs1LgfLEq-u6jnA8Hy6qQnvc","time":"2019-07-28 12:00:00","pic":"1"},
                // 	{"openid":"oJH5qs1LgfLEq-u6jnA8Hy6qQnvc","otheropenid":"oJH5qs1LgfLEq-u6jnA8Hy6qQnvc","time":"2019-07-28 12:00:00","pic":"2"},
                // 	{"openid":"oJH5qs1LgfLEq-u6jnA8Hy6qQnvc","otheropenid":"oJH5qs1LgfLEq-u6jnA8Hy6qQnvc","time":"2019-07-28 12:00:00","pic":"3"},
                // 	{"openid":"oJH5qs1LgfLEq-u6jnA8Hy6qQnvc","otheropenid":"oJH5qs1LgfLEq-u6jnA8Hy6qQnvc","time":"2019-07-28 12:00:00","pic":"4"},
                // 	{"openid":"oJH5qs1LgfLEq-u6jnA8Hy6qQnvc","otheropenid":"oJH5qs1LgfLEq-u6jnA8Hy6qQnvc","time":"2019-07-28 12:00:00","pic":"5"},
                // 	{"openid":"oJH5qs1LgfLEq-u6jnA8Hy6qQnvc","otheropenid":"oJH5qs1LgfLEq-u6jnA8Hy6qQnvc","time":"2019-07-28 12:00:00","pic":"6"},
                // 	{"openid":"oJH5qs1LgfLEq-u6jnA8Hy6qQnvc","otheropenid":"oJH5qs1LgfLEq-u6jnA8Hy6qQnvc","time":"2019-07-28 12:00:00","pic":"7"},
                // 	{"openid":"oJH5qs1LgfLEq-u6jnA8Hy6qQnvc","otheropenid":"oJH5qs1LgfLEq-u6jnA8Hy6qQnvc","time":"2019-07-28 12:00:00","pic":"8"},
                // ];
                // res.data.coups[5].state = "111";
                if (res.data.info.length >= 8) {
                    PopManager.showPop("SelfEndPop", res.data);
                }
                else {
                    if (res.data.iscard == 1) {
                        PopManager.showPop("SelfPop", res.data);
                    }
                    else {
                        PopManager.showPop("StartPop", res.data);
                    }
                }
            }
            else {
                PopManager.showPop("ErrorPop");
            }
        });
    };
    return UIManager;
}(egret.DisplayObjectContainer));
__reflect(UIManager.prototype, "UIManager");
//# sourceMappingURL=UIManager.js.map