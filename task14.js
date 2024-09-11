let arr =[[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5]];
let sum =0;
console.log(arr.length);
console.log(arr[sum].length);


for(let i=0 ;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        sum =sum + arr[i][j];
    }
}
console.log(sum);
