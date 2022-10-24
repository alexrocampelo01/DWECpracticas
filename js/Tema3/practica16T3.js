let arr =[1,2,3,4,5,10,13];
console.log (getOdd(arr));
function getOdd(arr){
    let inpares = arr.filter(item => item%2 != 0 );
    return inpares;
}