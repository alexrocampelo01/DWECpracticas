let arr = [-3,-13,-1];

console.log(max(arr));  
function max(arr){
    let max = 0;
    /*solo para postivos
    
    max = arr.reduce((acum, item,index,arr) =>{
        console.log("itero");
        console.log(acum +" > "+item);
        return acum > item ? acum : item;
    },0) 

    */
    max = arr.reduce((acum, item,index,arr) =>{
        console.log("itero");
        console.log(acum +" > "+item);
        return Math.max(item,acum);
    },0) 
   //max = arr.sort( (a,b) => a-b);
    
    return max;
}