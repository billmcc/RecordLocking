﻿var tempo = {} || tempo;//Changes START here **********************************************************************//*****************************************************************************************tempo.fn = {};tempo.fn.formOnFocusHandler = function (event, table) {	sources.contacts.lock2(    {        onSuccess:function(event){       		        },        onError: function(event){			$$('cancelBtn').focus();        	alert("Record in use in 4D");        }    });};//Changes END here ************************************************************************//*****************************************************************************************tempo.errors = {	userCredentials: {error: 200200, errorMessage: "User credentials are incorrect."}};tempo.settings = {	appMinSizeX: 800,	appMinSizeY: 600,	appNotificationLength: 2000,	appNotificationFade: 400,	appDefaultView: 'dockets', //dockets, disclosures	docketsSidebarPosition: 250,	docketsSidebarDefaultOpen: true,	docketsDetailPosition: 200,	docketsDetailDefaultOpen: true,	disclosuresSidebarPosition: 250,	disclosuresSidebarDefaultOpen: true,	disclosuresDetailPosition: 200,	disclosuresDetailDefaultOpen: true};