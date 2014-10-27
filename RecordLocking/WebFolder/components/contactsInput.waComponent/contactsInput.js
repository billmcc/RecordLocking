
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'contactsInput';
	// @endregion// @endlock

	
	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var lastNameInput = {};	// @textField
	var firstNameInput = {};	// @textField
	var saveBtn = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	lastNameInput.focus = function lastNameInput_focus (event)// @startlock
	{// @endlock
		//debugger;
		tempo.fn.formOnFocusHandler('');
	};// @lock

	firstNameInput.focus = function firstNameInput_focus (event)// @startlock
	{// @endlock
		debugger;
		tempo.fn.formOnFocusHandler('');
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
