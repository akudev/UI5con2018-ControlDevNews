sap.ui.define(
		['jquery.sap.global', 'sap/ui/core/XMLComposite'],
		function (jQuery, XMLComposite) {
	"use strict";

	var oForwardingContainer = XMLComposite.extend("control.ForwardingContainer", {
		metadata: {
			aggregations: {
				content: {
					type: "sap.ui.core.Control",
					multiple: true,
					forwarding: {
						idSuffix: "--panel", // ID given in XML fragment is prefixed with double-dash!
						aggregation: "content"
					}
				}
			}
		}
	});
	return oForwardingContainer;
}, /* bExport= */ true);