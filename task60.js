let arr =[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7];
let i=0;
for(i;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            arr.splice(j,1)
        }
    }
}
console.log(arr);
