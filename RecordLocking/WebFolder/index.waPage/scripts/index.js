
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock
	
	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		
		$$('loginComponent').loadComponent({
			path: '/components/tempoLogin.waComponent',
			onSuccess:function(event){
				           
	        }
		});

		$$('contactsGridComponent').loadComponent({
			path: '/components/contactsGrid.waComponent',
			onSuccess:function(event){
	                         
	        }
		});

		$$('contactsInputComponent').loadComponent({
			path: '/components/contactsInput.waComponent',
			onSuccess:function(event){
	            	              
	        }
		});				
				
	};// @lock
	
	


// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
