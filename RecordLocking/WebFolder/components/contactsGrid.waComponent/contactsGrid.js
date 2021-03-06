﻿
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'contactsGrid';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var contactsEvent = {};	// @dataSource
	// @endregion// @endlock
	
	$$('contactsInputComponent').loadComponent({
		path: '/components/contactsInput.waComponent',
		onSuccess:function(event){
			sources.contacts.all({
				onSuccess: function(e){
					kss.event.trigger({eventName: 'onCurrentElementChange', params: this});
					sources.contacts.cmRESTMethod("REST_Contacts_4DViews", {});
				}	
			});    	              
        }
	});
	
	

	// eventHandlers// @lock

	contactsEvent.onCurrentElementChange = function contactsEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
	
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener("contacts", "onCurrentElementChange", contactsEvent.onCurrentElementChange, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
