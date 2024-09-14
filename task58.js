let arr =[1,2,3,4,5,6,7,8,9];
let i=0;
let max =arr[0];
for(i;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
let secmax=arr[0];
for(let j=0;j<arr.length;j++){
    if(arr[j]>secmax && arr[j] !== max){
        secmax=arr[j];
    }
}
console.log(secmax);

