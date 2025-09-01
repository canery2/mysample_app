/* sap.ui.define(["sap/ui/core/mvc/Controller",
               "sap/m/MessageToast"
], function (Controller,MessageToast){
    "use strict";
    return Controller.extend("sample-app.controller.HelloPanel",{
        onShowHello: function() {
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sRecipint = this.getView().getModel().getProperty("/recipint/name");
            const sMsg = oBundle.getText("helloMsg",[sRecipint]);

            MessageToast.show(sMsg);
        }
    })
}) */

    sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast"
     ], function (Controller, MessageToast) {
        "use strict";
        return Controller.extend("sample-app.controller.HelloPanel", {
           /* onShowHello: function () {
              // read msg from i18n model
              const oBundle = this.getView().getModel("i18n").getResourceBundle();
              const sRecipient = this.getView().getModel().getProperty("/recipient/name");
              const sMsg = oBundle.getText("helloMsg", [sRecipient]);
              // show message
              MessageToast.show(sMsg);
           } */
              onShowHello: function () {
                const oBundlePromise = this.getOwnerComponent().getModel("i18n").getResourceBundle();
                oBundlePromise.then((oBundle) => {
                    const sRecipient = this.getView().getModel().getProperty("/recipient/name");
                    const sMsg = oBundle.getText("helloMsg", [sRecipient]);
                    MessageToast.show(sMsg);
                });
                
                console.log(oBundlePromise); 

            },
             onOpenDialog : function () {
                this.getOwnerComponent().helloDialog.open(this.getView());
             }
        });
     });