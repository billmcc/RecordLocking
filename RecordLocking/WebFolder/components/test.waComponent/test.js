
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'test';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	// @endregion// @endlock

	// eventHandlers// @lock

	// @region eventManager// @startlock
	// @endregion// @endlock

		$$('component2').loadComponent({
			path: '/components/test2.waComponent',
			onSuccess:function(event){
				           
	        }
		});

	};// @lock


}// @startlock
return constructor;
})();// @endlock
