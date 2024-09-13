const checkOdd =(num)=>{
    if(num%2!==0){
        return true;
    }
    return false;
}

let arr=[21,4,6,8,10];
let max =arr[0]
let i=1;

for(i;i<arr.length;i++){
    if(checkOdd(arr[i])){
        if(max<arr[i]){
            max=arr[i];
        }
    }
}

if(max===arr[0]){
    if(checkOdd(max)){
        console.log(max);  
    }
    else{
        console.log('NO ODD NUMBER IN ARRAY');
        
    }
}
else{
    console.log(max);
    
}