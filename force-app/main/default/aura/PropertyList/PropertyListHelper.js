({
	showProps : function(component, event, helper) {
	
        var action=component.get("c.getProperty");
        action.setCallback(this,function(response)
                           {
                               var responseValue=response.getReturnValue();
                               component.set("v.PropList",responseValue);
                               component.set("v.PropertyAvailable",true);
                               
                           });
        $A.enqueueAction(action,false);
	},
    
    SearchProps : function(component, event, helper)
    {
        var action=component.get("c.getSearch");
        action.setCallback(this,function(response)
                           {
                               var responseValue=response.getReturnValue();
                               component.set("v.PropList",responseValue);
                               component.set("v.PropertyAvailable",true);
                               
                           });
        $A.enqueueAction(action,false);
        
        
    }
})