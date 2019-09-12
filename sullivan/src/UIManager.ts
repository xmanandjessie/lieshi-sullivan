class UIManager extends egret.DisplayObjectContainer {
	public static _instance: UIManager;

	public static get instance(): UIManager {
		if (!UIManager._instance) {
			UIManager._instance = new UIManager();
		}
		return UIManager._instance;
	}

	public mainUILayer: egret.DisplayObjectContainer;

	public popLayer: egret.DisplayObjectContainer;

	public topLayer: egret.DisplayObjectContainer;

	public constructor() {
		super();
		this.initLayer();
	}

	private initLayer(): void {
		this.mainUILayer = new egret.DisplayObjectContainer();
		this.addChild(this.mainUILayer);

		this.popLayer = new egret.DisplayObjectContainer();
		this.addChild(this.popLayer);

		this.topLayer = new egret.DisplayObjectContainer();
		this.addChild(this.topLayer);
	}

	public initSelf(): void {
		//正常进入
		Global.post("info", {}).then((res: any) => {
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
					PopManager.showPop("SelfEndPop",res.data);
				} else {
					if(res.data.iscard == 1)
					{
						PopManager.showPop("SelfPop", res.data);
					}else
					{
						PopManager.showPop("StartPop", res.data);
					}
				}
			} else {
				PopManager.showPop("ErrorPop");
			}
		});
	}
}