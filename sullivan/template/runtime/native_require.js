
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"libs/modules/tween/tween.js",
	"libs/modules/res/res.js",
	"promise/promise.js",
	"bin-debug/pop/PopView.js",
	"bin-debug/view/item/RateItem.js",
	"bin-debug/comp/CustomButton.js",
	"bin-debug/comp/CustomCheckBox.js",
	"bin-debug/comp/CustomScrollView.js",
	"bin-debug/comp/CustomTabbar.js",
	"bin-debug/comp/CustomTabButton.js",
	"bin-debug/comp/HtmlText.js",
	"bin-debug/comp/QRCode.js",
	"bin-debug/pop/PopManager.js",
	"bin-debug/Main.js",
	"bin-debug/utils/AudioManager.js",
	"bin-debug/utils/CustomImage.js",
	"bin-debug/utils/ErrorCode.js",
	"bin-debug/utils/GameDispatcher.js",
	"bin-debug/utils/Global.js",
	"bin-debug/utils/Message.js",
	"bin-debug/utils/StageUtils.js",
	"bin-debug/view/DescPop.js",
	"bin-debug/view/ErrorPop.js",
	"bin-debug/view/SelfEndPop.js",
	"bin-debug/view/SelfPop.js",
	"bin-debug/view/ShareLandPop.js",
	"bin-debug/view/SharePop.js",
	"bin-debug/view/StartPop.js",
	"bin-debug/view/item/MapItem.js",
	"bin-debug/UIManager.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    if(egret_native.featureEnable) {
        //控制一些优化方案是否开启
        var result = egret_native.featureEnable({
            
        });
    }
    egret_native.requireFiles();
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 60,
		scaleMode: "exactFit",
		contentWidth: 640,
		contentHeight: 1030,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel("/system/fonts/DroidSansFallback.ttf", 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};