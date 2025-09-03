/* eslint-disable no-undef */
sap.ui.define([
	"sap/ui/core/util/MockServer"
], function (MockServer) {
	"use strict";
	return {
		init: function () {
			// create
			const oMockServer = new MockServer({
				rootUri: "/destinations/northwind/V2/Northwind/Northwind.svc/"
			}); 
			const oUriParameters = jQuery.sap.getUriParameters();
			// configure
			MockServer.config({
				autoRespond: true,
				autoRespondAfter: oUriParameters.get("serverDelay") || 1000
			});
			// simulate
			const sPath = jQuery.sap.getModulePath("sample-app.localService");
			oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");
			// start
			oMockServer.start();
		}
	};
});