let arr =[9,8,7,6,5,4,3,2,1];
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
                let temp = arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
        }
    }
}
console.log(arr);
