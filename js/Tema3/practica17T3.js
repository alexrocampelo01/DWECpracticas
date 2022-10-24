let nums = [1,2,5,10];
let pow = 2;
console.log( createPow(nums,pow));
function createPow(arr,pow){
    console.log(arr);
    console.log(pow);
    let arrPow = arr.map(item => item**pow);
    return arrPow;
    
   
}