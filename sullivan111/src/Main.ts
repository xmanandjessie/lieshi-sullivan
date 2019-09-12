class Main extends egret.DisplayObjectContainer {
    public static ROOT: string = "http://als.ha0y.cn/wechat/game/";

    public static openid: string;
    public static other: string;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        StageUtils.registStage(this.stage);
        this.addChild(UIManager.instance);
        this.getData();
        this.createGameScene();
    }

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene() {
        if (Main.openid && (!Main.other || Main.openid == Main.other)) {
            //正常进入
            Global.post("info", {}).then((res: any) => {
                if (res && res.code == 20000) {
                    if (res.data) {
                        if (res.data.length >= 8) {
                            PopManager.showPop("SelfEndPop");
                        } else {
                            PopManager.showPop("SelfPop", res.data);
                        }
                    }
                }
            });
        }
    }

    private getData() {
        var openid = Global.getQueryString("openId");
        var other = Global.getQueryString("other");

        if (openid && openid != 'null' && openid != 'undefined') {
            Main.openid = openid;
        }
        if (other && other != 'null' && openid != 'undefined') {
            Main.other = other;
        }
    }

    // public static share(url, eshareinfo = null, time = null): void {
    //     if (eval("$.wxIsReady")) {
    //         var weixin = eval("wx;");
    //         if (weixin) {
    //             // weixin.onMenuShareTimeline({
    //             //     title:"送你一份心意",
    //             //     link:url,
    //             //     imgUrl:"http://res.leasiondata.cn/lstatic/h/share/share_new.jpg",
    //             //     success: function () {

    //             //     },
    //             //     cancel: function () {
    //             //         // 用户取消分享后执行的回调函数
    //             //     }
    //             // });
    //             weixin.onMenuShareAppMessage({
    //                 title: "送你一份心意",
    //                 desc: "点击领取好友送您的月饼与祝福,该月饼券 " + time + " 日前领取有效",
    //                 link: url,
    //                 imgUrl: "http://res.leasiondata.cn/lstatic/h/share/share_new.jpg",
    //                 success: function () {
    //                     Main.sendShareOK(eshareinfo);
    //                 },
    //                 cancel: function () {

    //                 }
    //             });
    //         }
    //     } else {
    //         setTimeout(() => {
    //             Main.share(url, eshareinfo, time);
    //         }, 100);
    //     }
    // }

    // private static sendShareOK(eshareinfo): void {
    //     var self = this;
    //     $.ajax({
    //         url: Main.USER_INFO_API,
    //         data: { type: "esharesuccess", ticket: Main.USER_TICKET, eshareinfo: eshareinfo },
    //         success: function (data) {
    //             if (data.result == 0) {

    //             } else {
    //                 Message.show(data.result);
    //             }
    //         },
    //         error: function () {
    //         }, timeout: 8000,
    //         dataType: "json", async: true, type: "POST",
    //         complete: function (XMLHttpRequest, status) {
    //             if (status == 'timeout') {
    //                 PopManager.showPop("ErrorPop", { url: "resource/assets/asyn/error/error_web.png" });
    //             }
    //         }
    //     });
    // }

    // public static showShare(): void {
    //     var weixin = eval("wx");
    //     if (weixin) {
    //         weixin.showMenuItems({
    //             menuList: ["menuItem:share:appMessage"] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
    //         });
    //     }
    // }

    // public static hideShare(): void {
    //     var weixin = eval("wx");
    //     if (weixin) {
    //         weixin.hideMenuItems({
    //             menuList: ["menuItem:share:timeline", "menuItem:share:qq", "menuItem:share:weiboApp", "menuItem:share:facebook", "menuItem:share:QZone", "menuItem:favorite", "menuItem:openWithQQBrowser", "menuItem:openWithSafari", "menuItem:share:email"] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
    //         });
    //     }
    // }
}