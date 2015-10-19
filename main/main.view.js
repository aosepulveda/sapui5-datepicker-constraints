sap.ui.jsview("main.main", {

	getControllerName : function() {
		return "main.main";
	},
	createContent : function(oController) {
	    var maximumDate = new Date();
        var minimumDate = new Date();
        minimumDate = minimumDate.setDate(minimumDate.getDate()-15);
        var dateType = new sap.ui.model.type.Date({
                pattern: "dd/MM/yyyy",
                strictParsing: true
            }, {
                maximum: maximumDate,
                minimum: minimumDate
            });
        
        var oDatePicker = new sap.m.DatePicker(this.createId("datePickerTest"), {
            type: "Date",
            width: '200px',
            value: {
                path:"/dateValue", 
                type: dateType
            },
            placeholder: "Date"
        });
        var oModel = new sap.ui.model.json.JSONModel();
        var startDate = new Date();
		oModel.setData({
			dateValue: startDate
		});
		
        oDatePicker.setModel(oModel);
         
        oDatePicker.attachValidationError(function(oEvent) {
            var oElement = oEvent.getParameter("element");
            oElement.setValueState("Error");
        });
        oDatePicker.attachValidationSuccess(function(oEvent) {
            var oElement = oEvent.getParameter("element");
            oElement.setTooltip("");
            oElement.setValueState("None");
         });
    
		var mainPage = new sap.m.Page("mainPage", {
			title: "SAPUI5 DatePicker Constraints",
			enableScrolling: true,
			showNavButton:true,
			showHeader: true,
			customHeader : new sap.m.Bar({
				contentLeft: [ ],	
				contentMiddle: [ new sap.m.Label("myBarLabelNave", {text: "SAPUI5 DatePicker Constraints"}) ]
			}),
			content: [
			    oDatePicker
			    ]
		});

		return mainPage;
	}

});