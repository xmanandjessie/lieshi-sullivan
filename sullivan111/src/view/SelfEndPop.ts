class SelfEndPop extends PopView
{
	private container:egret.DisplayObjectContainer;

	public constructor() {
		super();
	}

	public setData():void
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

		var bg=new egret.Shape()
        bg.graphics.beginFill(0x0);
        bg.graphics.drawRect(0,0,StageUtils.stage.stageWidth,1780);
        bg.graphics.endFill();
        this.container.addChild(bg);

		var title = new CustomImage("resource/assets/asyn/reward/bg.png",true,()=>{
			title.x = StageUtils.SW - title.width >> 1;
			title.y = 50;
		});
		this.container.addChild(title);

		var reward = new CustomImage("resource/assets/asyn/reward/reward1.png",true,()=>{
			reward.x = StageUtils.SW - reward.width >> 1;
			reward.y = 274;
		});
		this.container.addChild(reward);

		var arrow = new CustomImage("resource/assets/asyn/arrow.png",true,()=>{
			arrow.x = StageUtils.SW - arrow.width >> 1;
			arrow.y = StageUtils.SH - 40;;
		});
		this.container.addChild(arrow);

		for(var i = 0;i<5;i++)
		{
			var rateItem = new RateItem();
			rateItem.setData(i+1);
			rateItem.x = StageUtils.SW - 556 >> 1;
			rateItem.y = 840 + i * 190;
			this.container.addChild(rateItem);
		}
	}
}