class Main extends egret.DisplayObjectContainer {
    public static ROOT: string = "http://als.ha0y.cn/wechat/game/";

    public static openid: string;
    public static other: string;

    public static infoData;

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
        if (Main.openid) {
            if (Main.other && Main.other != Main.openid) {
                Global.post("info", { other: Main.other }).then((res: any) => {
                    if (res && res.code == 20000 && res.data) {
                        PopManager.showPop("ShareLandPop", res.data);
                    } else {
                        PopManager.showPop("ErrorPop");
                    }
                });
            } else {
                //正常进入
                UIManager.instance.initSelf();
            }
        } else {
            PopManager.showPop("ErrorPop");
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
}