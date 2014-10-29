
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'contactsInput';
	// @endregion// @endlock

	
	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var contactsEvent = {};	// @dataSource
	var saveBtn = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	contactsEvent.onBeforeCurrentElementChange = function contactsEvent_onBeforeCurrentElementChange (event)// @startlock
	{// @endlock
		if (sources.contacts.getCurrentElement().isTouched()) {
			if(confirm("The record has been modified. Do you want to save it?")) {
				sources.contacts.save();
			}
		}   		
	};// @lock

	contactsEvent.onCurrentElementChange = function contactsEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		$$(getHtmlId('inputStatusLabel')).setValue( "Read Only" ); //This will become lock and related functionality
		$$(getHtmlId('lockImage')).hide();//images/lock.png
		$$(getHtmlId('saveBtn')).disable();
		$('.restricted.tbl_contacts').on('focus', formOnFocusHandler);

	};// @lock
	
	var formOnFocusHandler;
	
	formOnFocusHandler = function () {
		var loadResponse, lockTimeOutCheck, user, timerID;
		
		lockTimeOutCheck = function() {
		
			var currentDate, expireDate, elapsed;
			user = sources.locking.getSession();
			currentDate = new Date();
			expireDate = new Date(user.expiration);
			elapsed = parseInt(user.lifeTime-((Math.abs(expireDate - currentDate))/1000),10);
			if(elapsed > 30) {
				sources.contacts.save();
			}
		};
		
		var widgetID = this.id;
		loadResponse = sources.contacts.load4DRec({
				onSuccess: function(e){
				
					if(e.result.success) {
						
						$$(getHtmlId('inputStatusLabel')).setValue('Read Write');
						$$(widgetID).setReadOnly(false);
						$$(getHtmlId('saveBtn')).enable();
						var timerID = setTimeout(lockTimeOutCheck, 35000)			
					}
					else if(e.result.msg > "") {
						$$(getHtmlId('lockImage')).show();//images/lock.png
						$$(getHtmlId('inputStatusLabel')).setValue( e.result.msg );
						$$(getHtmlId('saveBtn')).disable();
					}
					else {
						$$(getHtmlId('inputStatusLabel')).setValue( loadResponse.errorMsg );
					}
					
					
				}
			}
		
		);
		 
	};

	saveBtn.click = function saveBtn_click (event)// @startlock
	{// @endlock
		sources.contacts.save();
	};// @lock
	
	//Actions



	// @region eventManager// @startlock
	WAF.addListener("contacts", "onBeforeCurrentElementChange", contactsEvent.onBeforeCurrentElementChange, "WAF");
	WAF.addListener("contacts", "onCurrentElementChange", contactsEvent.onCurrentElementChange, "WAF");
	WAF.addListener(this.id + "_saveBtn", "click", saveBtn.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
