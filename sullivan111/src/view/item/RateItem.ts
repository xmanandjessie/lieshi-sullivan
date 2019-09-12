class RateItem extends egret.DisplayObjectContainer
{
	public constructor() {
		super();
	}

	public setData(data):void
	{
		var bg = new CustomImage("resource/assets/asyn/rate/rate"+data+".png",true,()=>{
			// bg.x = 0
			// bg.y = 0;
		});
		this.addChild(bg);

		var btnShare = new CustomImage("resource/assets/asyn/rate/btn_share.png",true,()=>{
			btnShare.x = 30
			btnShare.y = 92;
		});
		this.addChild(btnShare);

		var btnDesc = new CustomImage("resource/assets/asyn/rate/btn_desc.png",true,()=>{
			btnDesc.x = 120
			btnDesc.y = 92;
		});
		this.addChild(btnDesc);

		Global.setBut(btnShare);
		Global.setBut(btnDesc);
		btnShare.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			PopManager.showPop("SharePop");
		},this);
		btnDesc.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			PopManager.showPop("DescPop",data);
		},this);
	}
}