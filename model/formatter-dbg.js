sap.ui.define([
	"sap/ui/core/Component"
  ], function (Component) {
	"use strict";
	return {
	  statusText: function (sStatus) {
		// "this" -> o anki control (örn. sap.m.Text)
		const oComponent = Component.getOwnerComponentFor(this);
		if (!oComponent) {
		  return sStatus; // fallback
		}
		const oResourceBundle = oComponent.getModel("i18n").getResourceBundle();
  
		switch (sStatus) {
		  case "A":
			return oResourceBundle.getText("invoiceStatusA");
		  case "B":
			return oResourceBundle.getText("invoiceStatusB");
		  case "C":
			return oResourceBundle.getText("invoiceStatusC");
		  default:
			return sStatus;
		}
	  }
	};
  });
  