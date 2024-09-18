let arr = [1,2,3,4,5,6,7,2,3,4,5,6,7,1];
let find=1;
index =-1;
index = arr.findLastIndex((value)=>value===find) ;
index = isNaN(index) ? -1 : index;
console.log(index);