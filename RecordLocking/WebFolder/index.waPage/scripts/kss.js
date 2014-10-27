﻿//the kss library requires lo-dash.jsvar kss = {} || kss; //kss is the "kss" library's global objectkss.dialog = {	create: function(data){		//creates a generic dialog component widget container and loads the web component		/* data param format			{				id: "yourwidgetID",				path: "/something",				width:500,				height: 400,				userData: {id: 45, somethingElse: "hello"},				callback: function(){//dosomething}			}		*/		//check incoming params		if(data == undefined){			return kss.util.callback(kss.errors.paramMissing);		} else if(typeof(data.path) != "string"){			return kss.util.callback(kss.errors.paramType, data.callback);		} else if(typeof(data.id) != "string"){			return kss.util.callback(kss.errors.paramType, data.callback);		}		//set default size if not specified		data.width = data.width || 400; //default width		data.height = data.height || 300; //default height				//build the widget DOM element		var domEl = document.createElement('div'); //HTML tag		domEl.setAttribute('id', data.id);		domEl.setAttribute('data-type', 'component');		domEl.setAttribute('data-lib', 'WAF');		domEl.setAttribute('data-constraint-left', 'true');		domEl.setAttribute('data-constraint-top', 'true');		domEl.setAttribute('data-modal', 'true');		domEl.setAttribute('style','position: absolute; margin: auto; top: 0; left: 0; bottom: 0; right: 0; width: ' + data.width + 'px;height: ' + data.height + 'px;');		domEl.setAttribute('class','waf-widget waf-component');		document.body.appendChild(domEl);				//Build the widget		var compWidget = new WAF.widget.Component({			'id': data.id,			"data-modal": "true"		});		//TODO: seems no onError event for load component? Need to cover if a bad path is passed in.		//http://forum.wakanda.org/showthread.php?7216-understanding-loadComponent()-better&p=34285#post34285		$$(data.id).loadComponent({			path: data.path,			userData: data.userData,			onSuccess: function(e){				if(_.isFunction(data.callback)){					data.callback({success: true});				}			}		});	},	close: function(id){		document.getElementById('waf-body').removeChild(document.getElementById(id));		document.getElementById('waf-body').removeChild(document.getElementById('waf-component-fade'));	}};kss.errors = {	paramMissing: {error: 100200, errorMessage: "You are missing a required parameter."},	paramType: {error: 100210, errorMessage: "A parameter is of an unexpected type."},	paramCallbackMissing: {error: 100260, errorMessage: "A callback function was expected."},	compLoadError: {error: 100700, errorMessage: "The component could not load."},	eventExists: {error: 105000, errorMessage: "The event already exists."},	eventMissing: {error: 105005, errorMessage: "The event does not exist."}};kss.util = {};kss.event = {	events: [		//example: {eventName: "myEvent", action: function}	],	listeners: [		//example: {listenerName: "name", eventName: "myEvent", action: function}	],	create: function(data) {		// data example: {eventName: "myEvent", action: function}		if(_.isNull(data.eventName) || _.isUndefined(data.eventName) || !_.isFunction(data.action)){ //checks parameters			return kss.errors.paramMissing;		}		//add and event to the events array only if it does not already exist		var event = kss.event.find({eventName: data.eventName});		if(!_.isObject(event)){			kss.event.events.push({eventName: data.eventName, action: data.action});		} else {			return kss.errors.eventExists;		}	},	trigger: function(data){		//data example: {eventName: "myEvent", params: {prop1: "test"}}		var targetEvent = kss.event.find({eventName: data.eventName});		if(_.isNull(targetEvent) || _.isUndefined(targetEvent)){			return kss.errors.eventMissing;		}else if(_.isUndefined(data.params)){			targetEvent.action(); //execute with no parameters passed		}else{			targetEvent.action(data.params); //execute with parameters passed		}		//execute listener functions		var matchingListeners = _.filter(kss.event.listeners, function(el){			return el.eventName == data.eventName;		});		matchingListeners.forEach(function(el){			el.callback(data.params);		});	},	remove: function(data){		var removedEvent = _.remove(kss.event.events, function(el){			return el.eventName == data.eventName;		});		if(removedEvent.length == 0){			return kss.errors.eventMissing;		}		return removedEvent;	},	find: function(data){		var position = _.findIndex(kss.event.events, { 'eventName': data.eventName });		if(position != -1){			return kss.event.events[position];		} else {			return null;		}	},	addListener: function(data){		//data example: {listenerName: "myListener", eventName: "myEvent", callback: function}		if(_.isNull(data.listenerName) || _.isUndefined(data.listenerName) ||_.isNull(data.eventName) || _.isUndefined(data.eventName) || !_.isFunction(data.callback)){ //checks parameters			return kss.errors.paramMissing;		}		kss.event.listeners.push({listenerName: data.listenerName, eventName: data.eventName, callback: data.callback});	},	removeListener: function(data){		//data example: {listenerName: "myEvent"}	}};