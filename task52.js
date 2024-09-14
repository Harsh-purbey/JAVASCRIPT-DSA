let arr =[1,2,3,4,5,6,7,8,9];
let max = arr[0]

let i=1;
for(i;i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i];
    }
}
console.log(max);
