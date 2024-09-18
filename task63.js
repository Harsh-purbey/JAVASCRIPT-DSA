let arr = [1,2,3,-1,5,7];
let flag = arr.find((value) => value<0);
console.log(flag ? 'NEGATIVE PRESENT' : 'ONLY POSITIVE');