let arr =[1,2,3,4,5,6,7,8];
for(let i =0;i<arr.length;i++){
arr.splice(i,1,arr[i]+1);
}
console.log(arr);
