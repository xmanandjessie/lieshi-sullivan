class SelfPop extends PopView
{
	private container:egret.DisplayObjectContainer;

	public constructor() {
		super();
	}

	public setData(list):void
	{
		this.container = new egret.DisplayObjectContainer();

		var scroll: egret.ScrollView = new egret.ScrollView();
		scroll.setContent(this.container);
		scroll.horizontalScrollPolicy = "off";
		scroll.scrollSpeed = 0.5;
		this.addChild(scroll);
		scroll.x = 0;
		scroll.y = 0;
		scroll.width = StageUtils.SW;
		scroll.height = StageUtils.SH;
		var bg = new CustomImage("resource/assets/asyn/self/bg.png",true,()=>{
			bg.width = StageUtils.SW;
			bg.height = 1871;
		});
		this.container.addChild(bg);

		var title = new CustomImage("resource/assets/asyn/self/title.png",true,()=>{
			title.x = StageUtils.SW - title.width >> 1;
			title.y = 50;
		});
		this.container.addChild(title);

		var deng1 = new CustomImage("resource/assets/asyn/self/deng1.png",true,()=>{
			deng1.x = 291;
			deng1.y = 70;
		});
		this.container.addChild(deng1);

		var deng2 = new CustomImage("resource/assets/asyn/self/deng2.png",true,()=>{
			deng2.x = 438
			deng2.y = 269;
		});
		this.container.addChild(deng2);

		for(var i = 0;i<5;i++)
		{
			var rateItem = new RateItem();
			rateItem.setData(i+1);
			rateItem.x = StageUtils.SW - 556 >> 1;
			rateItem.y = 1070 + i * 160;
			this.container.addChild(rateItem);
		}
	}
}