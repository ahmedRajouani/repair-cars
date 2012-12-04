
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
	var login1 = {};	// @login
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		$$("container1").center({center : 'vh'});
		
		$(window).resize(function(){
			$$("container1").center({center : 'vh'});
		});
	};// @lock

	login1.login = function login1_login (event)// @startlock
	{// @endlock
		window.location = "/index/";
	};// @lock

	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		window.location = window.location.href;
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("login1", "login", login1.login, "WAF");
	WAF.addListener("login1", "logout", login1.logout, "WAF");
// @endregion
};// @endlock
