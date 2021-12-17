({
	getValue : function(component, event, helper) {
		var option=event.getSource();
        var OptionSelected=option.get("v.value");
        component.set("v.SelectedOption",OptionSelected);
        
        
	}
    ,
    EventFire: function(component, event, helper) {
		
        var Compevent=component.getEvent("PassingValue");
        var label=component.get("v.SelectedOption");
        console.log(label);
        Compevent.setParams({City:label });
         console.log(label);
        Compevent.fire();
        
       
        
        
	}
})