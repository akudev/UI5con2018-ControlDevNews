sap.ui.define(
		['sap/ui/core/XMLComposite'],
		function (XMLComposite) {
	"use strict";
	
	var oPaginator = XMLComposite.extend("control.Paginator", {
		metadata: {
			properties: {
				page: { type: "int", defaultValue: 0 }
			},
			events: {
				change: {
					parameters: {
						page: {type: "int"}
					}
				}
			}
		},

		changeBy: function(delta) { // a button to change the page number was pressed
			var iPage = this.getPage();
			iPage += delta;
			iPage = Math.max(iPage, 0);
			this.setPage(iPage);
			this.fireEvent("change", {page: iPage});
		}
	});
	return oPaginator;
}, /* bExport= */ true);