class ErrorPop extends PopView
{
	public constructor() {
		super();
	}

	public setData():void
	{
		var bg = new CustomImage("resource/assets/error.jpg",true,()=>{
			bg.width = StageUtils.SW;
			bg.height = StageUtils.SH;
		});
		this.addChild(bg);
	}
}