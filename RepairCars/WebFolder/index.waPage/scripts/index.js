
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var login1 = {};	// @login
	var repairEvent = {};	// @dataSource
	var button1 = {};	// @button
	var carEvent = {};	// @dataSource
	var button15 = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	login1.login = function login1_login (event)// @startlock
	{// @endlock
		
		window.location = window.location.href;
	};// @lock

	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		window.location = "/login/";
	};// @lock

	repairEvent.onCurrentElementChange = function repairEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		// Add your code here
		sources.car.selectByKey(sources.car0.ID);
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		sources.repair.car.set(sources.car);
		sources.repair.employee.set(sources.employee);
		//sources.repair.type.set(sources.typeRepair.getSelection());
		sources.repair.save();
	};// @lock

	carEvent.onCurrentElementChange = function carEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		sources.customer.selectByKey(sources.customer0.ID);
	};// @lock

	button15.click = function button15_click (event)// @startlock
	{// @endlock
		sources.car.customer.set(sources.customer);
		sources.car.save();
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		if (WAF.directory.currentUser() === null) {
		window.location = "/login/";
		} else if(!WAF.directory.currentUserBelongsTo("Administrator")){
			$$('Tabs').removeTab(1);
		}
		
		
		
		$$("container10").center({center : 'vh'});
		
		$(window).resize(function(){
			$$("container10").center({center : 'vh'});
		});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("login1", "login", login1.login, "WAF");
	WAF.addListener("login1", "logout", login1.logout, "WAF");
	WAF.addListener("repair", "onCurrentElementChange", repairEvent.onCurrentElementChange, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("car", "onCurrentElementChange", carEvent.onCurrentElementChange, "WAF");
	WAF.addListener("button15", "click", button15.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
