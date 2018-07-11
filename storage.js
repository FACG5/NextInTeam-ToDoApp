
var StorageFunctions = {
    getId : function(){
        aha1 = JSON.parse(localStorage.getItem("items"))
        var idCounter;
        console.log(aha1);
        if(aha1){
            
            if(typeof aha1[0] != 'undefined'){
                idCounter = aha1[aha1.length-1].id+1;
            }else{
                idCounter = 0;
            }
        }
        console.log(idCounter);
        return idCounter;
    },
    saveTodos : function(todos){
        localStorage.setItem('items', JSON.stringify(todos));
    }
}
if (typeof module !== 'undefined') {
    module.exports = StorageFunctions;
}