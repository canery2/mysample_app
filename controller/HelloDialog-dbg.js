sap.ui.define([
    "sap/ui/base/Object"
], function (Object){
    "use strict";
    return Object.extend("sample-app.controller.HelloDialog",{
        _getDialog : function () { 
            if (!this._oDialog){
                this._oDialog = sap.ui.xmlfragment("sample-app.view.HelloDialog",this);
                
            }
            return this._oDialog;
        },
        open: function (oView) {
            const oDialog = this._getDialog();
            oView.addDependent(oDialog);

            oDialog.open();
        },

        onCloseDialog : function() {
            this._getDialog().close();
        }
    })

} ) 