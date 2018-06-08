sap.ui.define(
		['sap/ui/core/XMLComposite'],
		function (XMLComposite) {
	"use strict";
	
	var HelloWorld = XMLComposite.extend("control.HelloWorld", {
		metadata: {
			properties: {
				text: { type: "string", defaultValue: "Hello World" }
			}
		}
	});
	return HelloWorld;
}, /* bExport= */ true);