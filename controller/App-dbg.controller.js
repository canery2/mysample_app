/* eslint-disable no-unused-vars */
sap.ui.define(
	[
		"sap/ui/core/mvc/Controller"
		// eslint-disable-next-line no-unused-vars
	],
	(
		Controller
	) => {
		"use strict";
		return Controller.extend("sample-app.controller.App", {
			onOpenDialog: function () {
				this.getOwnerComponent().helloDialog.open(this.getView());
			},
		});
	}
);
