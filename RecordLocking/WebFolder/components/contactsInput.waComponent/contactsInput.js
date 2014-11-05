
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'contactsInput';
	// @endregion// @endlock

	
	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var cancelBtn = {};	// @button
	var contactsEvent = {};	// @dataSource
	var saveBtn = {};	// @button
	// @endregion// @endlock

	var entityInfo;
	entityInfo = {};
	entityInfo.source = sources.contacts;
	entityInfo.tableEvent = contactsEvent;
	entityInfo.primaryKeyAttr = 'ID';
	
	var request, response;
	request = {};
	request.tableName = "Contacts";
	//response = sources.locking.callRESTMethod("Locking","REST_isPermitted",request);
	//alert(response.permitted);

	
	
	
	// eventHandlers// @lock

	cancelBtn.click = function cancelBtn_click (event)// @startlock
	{// @endlock
		debugger;
		entityInfo.serverRefresh = true;
		entityInfo.source.serverRefresh({forceReload: true});
	};// @lock

	contactsEvent.onBeforeCurrentElementChange = function contactsEvent_onBeforeCurrentElementChange (event)// @startlock
	{// @endlock
		if(entityInfo.serverRefresh === true) {
			entityInfo.serverRefresh = false;
		}
		else {
			if (entityInfo.source.getCurrentElement().isTouched()) {
				if(confirm("The record has been modified. Do you want to save it?")) {
					entityInfo.source.save();
				}
			}
		}   		
	};// @lock

	contactsEvent.onCurrentElementChange = function contactsEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		if(entityInfo.source.getCurrentElement()) {
			entityInfo.primaryKeyValue = entityInfo.source.getCurrentElement()[entityInfo.primaryKeyAttr].getValue();
		}
		$$(getHtmlId('inputStatusLabel')).setValue( "Read Only" ); //This will become lock and related functionality
		$$(getHtmlId('lockImage')).hide();//images/lock.png
		$$(getHtmlId('saveBtn')).disable();
		$$(getHtmlId('cancelBtn')).focus(true);

		entityInfo.serverRefresh = false;
		entityInfo.load4DRec = false;
	};// @lock
	
	var formOnFocusHandler;
	
	formOnFocusHandler = function () {
		var tablename, loadResponse, lockTimeOutCheck, user, timerID;
		if(entityInfo.load4DRec === false) {
			lockTimeOutCheck = function() {
				var currentDate, expireDate, elapsed;
				user = sources.locking.getSession();
				currentDate = new Date();
				expireDate = new Date(user.expiration);
				elapsed = parseInt(user.lifeTime-((Math.abs(expireDate - currentDate))/1000),10);
				if(elapsed > 15) {
					entityInfo.source.save({
						onSuccess: function(e){
							
						},
						cancel: true
					});
				}
			};
			loadResponse = entityInfo.source.load4DRec({
				
					tableName: entityInfo.source.getDataClass().getName(),
					primaryKeyAttr: entityInfo.primaryKeyAttr,	
					primaryKeyValue: entityInfo.primaryKeyValue,	

					onSuccess: function(e){
						if(e.result.success) {						
							$$(getHtmlId('inputStatusLabel')).setValue('Read Write');	
							$$(getHtmlId('lockImage')).hide();//images/lock.png
							$$(getHtmlId('saveBtn')).enable();
							$('.restricted.tbl_contacts').each(function( index ) {
								$$(this.id).setReadOnly(false)	
							});
							debugger;
							var timerID = setTimeout(lockTimeOutCheck, 18000);			
						}
						else {
							$$(getHtmlId('inputStatusLabel')).setValue( e.result.msg );
							$$(getHtmlId('lockImage')).show();//images/lock.png
							$$(getHtmlId('saveBtn')).disable();
							$('.restricted.tbl_contacts').each(function( index ) {$$(this.id).setReadOnly(true)});
						}
						entityInfo.load4DRec = e.result.success;	
					}
				}
			
			); 			
		}
	};
	
	kss.event.addListener({listenerName: "onCurrentElementChange", eventName: "onCurrentElementChange", callback: function(){
		//
		entityInfo.tableEvent.onCurrentElementChange();
	}});
	

	saveBtn.click = function saveBtn_click (event)// @startlock
	{// @endlock
		entityInfo.source.save({
				onSuccess: function(e){
					
				},
				cancel: true
			}
		);
	};// @lock
	
	//Actions
	$('.restricted.tbl_contacts').on('focus', formOnFocusHandler);
	
	
	// @region eventManager// @startlock
	WAF.addListener(this.id + "_cancelBtn", "click", cancelBtn.click, "WAF");
	WAF.addListener("contacts", "onBeforeCurrentElementChange", contactsEvent.onBeforeCurrentElementChange, "WAF");
	WAF.addListener("contacts", "onCurrentElementChange", contactsEvent.onCurrentElementChange, "WAF");
	WAF.addListener(this.id + "_saveBtn", "click", saveBtn.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
