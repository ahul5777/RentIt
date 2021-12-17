({
	   getProp : function(component, event, helper) {
       console.log("helper call")
       var pageReference = component.get("v.pageReference");
        var pId=pageReference.state.c__PropertyId;
        console.log(pId);
        var action=component.get("c.getDetails");
        action.setParams(
      
            {
                'PropId':pId 
            }
            
            );
      action.setCallback(this,function(response){

           var state = response.getState();

            var responseValue= response.getReturnValue();

            component.set('v.Property',responseValue);
             
            component.set("v.PropertyFound",true);
          
          
             

        });
        
        $A.enqueueAction(action,false);
        console.log("helper call")
	}
})