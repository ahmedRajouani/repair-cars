
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button8 = {};	// @button
	var button2 = {};	// @button
	var button18 = {};	// @button
	var customerEvent = {};	// @dataSource
	var button17 = {};	// @button
	var login1 = {};	// @login
	var repairEvent = {};	// @dataSource
	var button1 = {};	// @button
	var carEvent = {};	// @dataSource
	var button15 = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	button8.click = function button8_click (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

	button18.click = function button18_click (event)// @startlock
	{// @endlock
		// Add your code here
		
		var myFact=sources.repair.getCurrentElement();
		var param={};
		param.ID=myFact.ID.getValue();;
		var xhr = new XMLHttpRequest();
  		xhr.open('POST','/report',false);
  		xhr.send(JSON.stringify(param));
  		
  		var reportID = xhr.responseText;
  		sources.report.query('ID='+reportID);
//		var customer = null;
//		sources.repair.car.load({'onSuccess':function(e){e.entity.customer.load({onSuccess:function(ee){ customer=ee.entity.fullName.getValue()}})}})
//		var car = null;
//		sources.repair.car.load({'onSuccess':function(e){ car = e.entity.regNumber.getValue() }})
//		alert("customer :" + customer + " car : " + car + " Date :"  + myFact.repairDate.getValue() );
		
	};// @lock

	customerEvent.onCurrentElementChange = function customerEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
//		if(this.getCurrentElement()){
//		 	sources.repair1.query('car.customer.ID = ' + this.getCurrentElement().getKey() + " AND invoice=null",{
//	 		    'onSuccess':function(e){
//	 		        console.log(e);
//	 			}
//	 		});
//	 	}
	};// @lock

	button17.click = function button17_click (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

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
		sources.car1.selectByKey(sources.car0.getCurrentElement() ? sources.car0.getCurrentElement().getKey() : null)
	//	sources.car.selectByKey(sources.car0.ID);
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		sources.repair.car.set(sources.car1);
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
	WAF.addListener("button8", "click", button8.click, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button18", "click", button18.click, "WAF");
	WAF.addListener("customer", "onCurrentElementChange", customerEvent.onCurrentElementChange, "WAF");
	WAF.addListener("button17", "click", button17.click, "WAF");
	WAF.addListener("login1", "login", login1.login, "WAF");
	WAF.addListener("login1", "logout", login1.logout, "WAF");
	WAF.addListener("repair", "onCurrentElementChange", repairEvent.onCurrentElementChange, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("car", "onCurrentElementChange", carEvent.onCurrentElementChange, "WAF");
	WAF.addListener("button15", "click", button15.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
