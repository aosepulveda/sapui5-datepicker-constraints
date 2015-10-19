sap.ui.jsview("main.main", {

	getControllerName : function() {
		return "main.main";
	},
	createContent : function(oController) {
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
			    
			    ]
		});

		return mainPage;
	}

});