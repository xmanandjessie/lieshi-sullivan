class StartPop extends PopView
{
    public constructor() {
        super();
    }

	public setData(data):void
	{
		super.setData(data);
		var bg = new CustomImage("resource/assets/asyn/loading/loading_bg.jpg",true,()=>{
			bg.width = StageUtils.SW;
			bg.height = StageUtils.SH;
		});
		this.addChild(bg);

        var btnInto = new CustomImage("resource/assets/asyn/loading/btn_into.png",true,()=>{
			btnInto.x = StageUtils.SW - btnInto.width >> 1;
			btnInto.y = StageUtils.SH - 100;
		});
		this.addChild(btnInto);
        Global.setBut(btnInto);
        btnInto.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			PopManager.hidePop("StartPop");
			PopManager.showPop("SelfPop", data);
        },this);
	}
}
