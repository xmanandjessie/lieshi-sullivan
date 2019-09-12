class DengItem extends egret.DisplayObjectContainer
{
	public constructor() {
		super();

		var deng1 = new CustomImage("resource/assets/asyn/self/deng1.png", true, () => {
			deng1.x = 291;
			deng1.y = 70;
			egret.Tween.get(deng1,{loop:true}).to({y:100},2000).to({y:70},2000);
		});
		this.addChild(deng1);
		

		var deng2 = new CustomImage("resource/assets/asyn/self/deng2.png", true, () => {
			deng2.x = -200;
			deng2.y = 800;
			egret.Tween.get(deng2,{loop:true}).to({rotation:3},1000).to({rotation:0},1000);
			egret.Tween.get(deng2,{loop:true}).to({x:StageUtils.SW,y:200},20000).to({x:-200,y:800},0).to({},5000);
		});
		this.addChild(deng2);
	}
}