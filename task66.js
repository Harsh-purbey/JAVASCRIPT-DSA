let arr = [1,2,3,4,5,6,7,1,2,3,4,5,6,7];
let find=1;
index =-1;
index = arr.find((value)=>value===find)-1 ;
index = isNaN(index) ? -1 : index;
console.log(index);
