
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock



	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		sources.contacts.all();
		loggedInAs();
	

	};// @lock
	
	var formOnFocusHandler = function (event)
	{
		sources.contacts.load4DRec(
        {
            onSuccess:function(event){
            	              
            },
            onError: function(event){
				$$('cancelBtn').focus();
            	alert("Record in use in 4D");
            }
        });
	};
	
	var loggedInAs = function ()
	{
		var user;
		user = WAF.directory.currentUser();
		if(user) {
			$('#userLabel').html( "Logged in as " + user.userName );
		}
	};
	
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


// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
