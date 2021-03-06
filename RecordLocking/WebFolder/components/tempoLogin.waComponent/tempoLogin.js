﻿
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'tempoLogin';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var logoutBtn = {};	// @button
	var loginBtn = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	logoutBtn.click = function logoutBtn_click (event)// @startlock
	{// @endlock
		WAF.directory.logout({
			onSuccess: function(event){
				loggedInAs(); 
			},
	        onError: function(event){
				loggedInAs(); 
	        }			
		});
	};// @lock

	loginBtn.click = function loginBtn_click (event)// @startlock
	{// @endlock
		
		var username, password;
		username = $$(getHtmlId('usernameInput')).getValue();
		password = $$(getHtmlId('passwordInput')).getValue();
		
		WAF.directory.login( username, password,
		{
            onSuccess:function(event){
            	if(event.result) {
            		console.log('login success');
            		loggedInAs();
            	}
            	else {
            		WAF.directory.logout({
            			onSuccess:function(event){
            				console.log('login fail');
            				loggedInAs();
            			}
            		});
            	} 
            	              
            },
            onError: function(event){
          		WAF.directory.logout();
				loggedInAs(); 
            }
		});
	};// @lock
	
	//Functions
	var loggedInAs = function ()
	{
		var user;
		user = WAF.directory.currentUser();
		if(user) {
			$$(getHtmlId('userLabel')).setValue( "Logged in as " + user.userName );
		}
		else {
			$$(getHtmlId('userLabel')).setValue( "Please log in" );
		}
		$$(getHtmlId('usernameInput')).setValue("");
		$$(getHtmlId('passwordInput')).setValue("");
	};
	
	loggedInAs();

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_logoutBtn", "click", logoutBtn.click, "WAF");
	WAF.addListener(this.id + "_loginBtn", "click", loginBtn.click, "WAF");
	// @endregion// @endlock

	};// @lock
	
	
	
}// @startlock
return constructor;
})();// @endlock
