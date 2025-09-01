/* eslint-disable no-unused-vars */
sap.ui.define(
	[
		"sap/ui/Device",
		"sap/ui/core/mvc/Controller",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator",
		"sap/ui/model/json/JSONModel",
		"sap/base/strings/formatMessage",
		"sap/m/MessageToast",
		// eslint-disable-next-line no-unused-vars
	],
	(
		Device,
		Controller,
		Filter,
		FilterOperator,
		JSONModel,
		formatMessage,
		MessageToast
	) => {
		"use strict";
		return Controller.extend("sample-app.controller.App", {
			onOpenDialog: function () {
				this.getOwnerComponent().helloDialog.open(this.getView());
			},
		});
	}
);
