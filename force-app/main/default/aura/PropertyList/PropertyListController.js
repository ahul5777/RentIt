({
	ShowProp : function(component, event, helper) {
		helper.showProps(component, event, helper);
	},
    
    ownerDetailsClick:function (component, event, helper)
    {
       
        component.set("v.OpenOwnerDetails","true");
        var eventSource=event.getSource();
        var valueI=eventSource.get("v.value");
        component.set("v.OwnerID",valueI);
    },
    
    closeOwnerInfo:function(component, event, helper)
    {
         component.set("v.OpenOwnerDetails","false");
    },
     closeForm:function(component, event, helper)
    {
         component.set("v.OpenEnqDetails","false");
    },
    OpEnqClick:function(component, event, helper)
    {
         component.set("v.OpenEnqDetails","true");
        var eventSource=event.getSource();
        var valueII=eventSource.get("v.value");
        
        component.set("v.PropID",valueII);
    },
    OpTabClick:function(component, event, helper)
    {
        
        var eventSource=event.getSource();
        var valueIII=eventSource.get("v.value");
        
       var navService= component.find("navService");
         var pageReference = {
            type:'standard__component',
            attributes: {
             componentName:'c__MyPropertyMasterTab'
                        },
             state:     {
             "c__PropertyId":valueIII
                        }
            };
        
        
        component.set("v.pageReference",pageReference);
        navService.navigate(pageReference);
        
    },
    compCatch:function(component, event, helper)
    {
         const value=event.getParam("City");
        console.log(value);
         component.set("v.CityName",value);
         helper.showProps(component, event, helper);
    },
    
    

})