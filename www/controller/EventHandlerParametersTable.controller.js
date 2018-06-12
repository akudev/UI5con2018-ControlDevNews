sap.ui.controller("controller.EventHandlerParametersTable", {
	onInit: function() {
		var url = "https://cors-anywhere.herokuapp.com/services.odata.org/V2/Northwind/Northwind.svc";
		var oModel = new sap.ui.model.odata.v2.ODataModel(url);
		this.getView().setModel(oModel);
	},
	
	handleSelectionChange: function(oContext) {
		alert(oContext);
	},
	
	handleItem: function(oItem) {
		alert(oItem.ProductName);
	}
	
});