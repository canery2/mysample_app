 
sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sample-app/controller/HelloDialog"
], function (UIComponent, JSONModel, HelloDialog) {
	"use strict";
	return UIComponent.extend("sample-app.Component", {
		metadata : {
			manifest : "json"
		},
		init : function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
			// set data model
			const oData = {
				recipient : {
					name : "World"
				}
			};
			const oModel = new JSONModel(oData);
			this.setModel(oModel);
			// set dialog
			this.helloDialog = new HelloDialog();
			this.getRouter().initialize();
		}
	});
});