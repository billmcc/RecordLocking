﻿
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'contactsInput';
	// @endregion// @endlock

	var contactId = '';
	this.contactsChanged = function (contactID){
		
		sources.contacts.query('ID = '+ contactId);
		
	};
	
	this.load = function (data) {// @lock

//	kss.addListener({listenerName: "contactsChangedListener",
//		eventName: "contactsChangedEvent",
//		callback: function (e){
//			
//		}
//	});
	// @region namespaceDeclaration// @startlock
	var lastNameInput = {};	// @textField
	var firstNameInput = {};	// @textField
	var saveBtn = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	lastNameInput.focus = function lastNameInput_focus (event)// @startlock
	{// @endlock
		formOnFocusHandler(event);
	};// @lock

	firstNameInput.focus = function firstNameInput_focus (event)// @startlock
	{// @endlock
		formOnFocusHandler(event);
	};// @lock

	saveBtn.click = function saveBtn_click (event)// @startlock
	{// @endlock
		$comp.sources.contacts.save();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_lastNameInput", "focus", lastNameInput.focus, "WAF");
	WAF.addListener(this.id + "_firstNameInput", "focus", firstNameInput.focus, "WAF");
	WAF.addListener(this.id + "_saveBtn", "click", saveBtn.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
