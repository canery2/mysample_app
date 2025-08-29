sap.ui.define(["sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], (UIComponent,JSONModel) => {
	"use strict";
	return UIComponent.extend("sample-app.Component", {
		metadata: {
			
			manifest: "json"
			//interfaces: ["sap.ui.core.IAsyncContentCreation"],
		},
		init : function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			const oData = {
				recipient : {
				   name : "World"
				}
			 };
			 const oModel = new JSONModel(oData);
			 this.setModel(oModel); 
	   }
		
	});
});
