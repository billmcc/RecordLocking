﻿
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock


	kss.event.create({eventName: "onAppLoad", action: function(){}});
	
	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		$$('loginComponent').loadComponent({
			path: '/components/tempoLogin.waComponent',
			onSuccess:function(event){
				//debugger;
	            kss.event.trigger({eventName: "onAppLoad"});              
	        }
		});

		$$('contactsGridComponent').loadComponent({
			path: '/components/contactsGrid.waComponent',
			onSuccess:function(event){
	        	sources.contacts.all();
	        }
		});

		$$('contactsInputComponent').loadComponent({
			path: '/components/contactsInput.waComponent',
			onSuccess:function(event){
	            	              
	        }
		});
		
		//debugger;
		
		
	};// @lock
	
	


// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
