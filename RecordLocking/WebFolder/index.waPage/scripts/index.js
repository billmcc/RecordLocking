﻿
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock
	
	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		kss.event.create({eventName: "onCurrentElementChange", action: function(params){
		}});
			
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
		
		$$(getHtmlId('component1')).loadComponent({
			path: '/components/test.waComponent',
			onSuccess:function(event){
			$$('component2').loadComponent({
			path: '/components/test2.waComponent',
			onSuccess:function(event){
				           
	        }
		});       
	        }
		});				
				
	};// @lock
	
	


// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
