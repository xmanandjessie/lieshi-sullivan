class DescPop extends PopView
{
	public constructor() {
		super();
	}

	public show():void
	{
		var bg=new egret.Shape()
      
        bg.graphics.beginFill(0x0,0.7);
        bg.graphics.drawRect(0,0,StageUtils.stage.stageWidth,StageUtils.stage.stageHeight);
        bg.graphics.endFill();
        
        this.addChildAt(bg,0);
        bg.alpha=0;
        Global.fadeIn(bg);

		UIManager.instance.popLayer.addChild(this);
		this.touchEnabled = true;
	}

	public setData(data):void
	{
		var bg = new CustomImage("resource/assets/asyn/desc/desc"+data+".png",true,()=>{
			bg.x = StageUtils.SW - bg.width >> 1;
			bg.y = StageUtils.SH - bg.height >> 1;
		});
		this.addChild(bg);

		var btnClose = new CustomImage("resource/assets/asyn/close.png",true,()=>{
			btnClose.x = 528
			btnClose.y = 130;
		});
		this.addChild(btnClose);
		Global.setBut(btnClose);
		btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			PopManager.hidePop("DescPop");
		},this);
	}
}