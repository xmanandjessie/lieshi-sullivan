var shareObj = {
	link: "http://als.ha0y.cn/wechat/authorize?other=" + getQueryString("openId"),
	imgUrl: "http://als.ha0y.cn/sullivan/resource/assets/share.jpg",
	copy: "莎莉文中秋献礼"
};

var wxConfig = null;

function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) {
		return decodeURIComponent((r[2]));
	}
	return null;
}

var loadWx = function () {
	$.ajax({
		url: "http://als.ha0y.cn/wechat/getSignature",
		data: { url: window.location.href.split("#")[0] },
		success: function (data) {
			if (data) {
				wxConfig = data;
				initWx();
			}
		},
		dataType: "json", async: false, type: "POST"
	});
}

var addCard = function (obj, cardList, success, cancel) {
	if (wx) {
		wx.addCard({
			cardList: cardList,
			/* cd
			[
			  {
				cardId: 'pDF3iY9tv9zCGCj4jTXFOo1DxHdo',
				cardExt: '{"code": "", "openid": "", "timestamp": "1418301401", "signature":"ad9cf9463610bc8752c95084716581d52cd33aa0"}'
			  },
			  {
				cardId: 'pDF3iY9tv9zCGCj4jTXFOo1DxHdo',
				cardExt: '{"code": "", "openid": "", "timestamp": "1418301401", "signature":"ad9cf9463610bc8752c95084716581d52cd33aa0"}'
			  }
			],*/
			success: function (res) {
				//alert('已添加卡券：' + JSON.stringify(res.cardList));
				success.call(obj, res);
			},
			cancel: function (res) {
				cancel.call(obj, res);
				//alert(JSON.stringify(res))
			}
		});
	}
}


var setWxObj = function () {
	if (wx && wxConfig) {
		wx.updateAppMessageShareData({
			title: shareObj.copy,
			link: shareObj.link,
			imgUrl: shareObj.imgUrl,
			success: function () {
			}
		});
		wx.updateAppMessageShareData({
			title: shareObj.copy,
			desc: '',
			link: shareObj.link,
			imgUrl: shareObj.imgUrl,
			success: function () {
			}
		});
	}
}

var initWx = function () {
	if (wx && wxConfig) {
		wx.ready(function () {
			setWxObj();
		});
		//alert($.wxConfig.appId+":"+$.wxConfig.timestamp+":"+$.wxConfig.nonceStr+":"+$.wxConfig.signature);
		wx.config({
			debug: false,
			appId: wxConfig.appId,
			timestamp: wxConfig.timestamp,
			nonceStr: wxConfig.nonceStr,
			signature: wxConfig.signature,
			jsApiList: ["updateAppMessageShareData","updateTimelineShareData","onMenuShareTimeline","onMenuShareAppMessage", "addCard", "closeWindow", "hideMenuItems", "showMenuItems"]
		});
		wx.error(function (res) {
			// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
			alert(JSON.stringify(res));
		});
	}
}

var hideMenuItem = function () {
	if (wx && $.wxConfig) {
		wx.hideMenuItems({
			menuList: ["menuItem:share:appMessage", "menuItem:share:timeline", "menuItem:share:qq", "menuItem:share:weiboApp", "menuItem:share:facebook", "menuItem:share:QZone", "menuItem:favorite", "menuItem:openWithQQBrowser", "menuItem:openWithSafari", "menuItem:share:email"] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
		});
	}
}

$(document).ready(function () {
	loadWx();
});

