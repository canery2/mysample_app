sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sample-app/model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, JSONModel, formatter, Filter, FilterOperator
) {
	"use strict";
	return Controller.extend("sample-app.controller.InvoiceList", {
		formatter: formatter,
		onInit : function () {
			const oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		},

		onFilterInvoices : function(oEvent) {
			const aFilter = [];
			const sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery))
			}

			const oList = this.getView().byId("invoiceList");
			const oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},
		// eslint-disable-next-line no-unused-vars
		onPress: function (oEvent) {
			const oItem = oEvent.getSource();
			const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail", {
				invoicePath: oItem.getBindingContext("invoice").getPath().substr(1)
			});
		}
	});
});