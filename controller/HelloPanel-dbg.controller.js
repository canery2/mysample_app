sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast"
     ], function (Controller, MessageToast) {
        "use strict";
        return Controller.extend("sample-app.controller.HelloPanel", {
            
              onShowHello: function () {
                const oBundlePromise = this.getOwnerComponent().getModel("i18n").getResourceBundle();
                oBundlePromise.then((oBundle) => {
                    const sRecipient = this.getView().getModel().getProperty("/recipient/name");
                    const sMsg = oBundle.getText("helloMsg", [sRecipient]);
                    MessageToast.show(sMsg);
                });
                
            },
             onOpenDialog : function () {
                this.getOwnerComponent().helloDialog.open(this.getView());
             }
        });
     });