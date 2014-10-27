
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
	
	kss.event.addListener({
		listenerName: "myListener", 
		eventName: "onFocusHandlerEvent", 
		callback: function(e){
			console.log('kss.event.addListener onFocusHandlerEvent');
			$$(getHtmlId('lockImage')).setValue('/images/lock.png');
			$("#lockImage").prop("alt", "This is some alt text");
		}});
	
	// eventHandlers// @lock
	
	
	lastNameInput.focus = function lastNameInput_focus (event)// @startlock
	{// @endlock
		
		//tempo.fn.formOnFocusHandler('');
		kss.event.trigger({eventName: "onFocusHandlerEvent", params: {prop1: "test"}});
	};// @lock

	firstNameInput.focus = function firstNameInput_focus (event)// @startlock
	{// @endlock
		
		//tempo.fn.formOnFocusHandler('');
		kss.event.trigger({eventName: "onFocusHandlerEvent", params: {prop1: "test"}});
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
