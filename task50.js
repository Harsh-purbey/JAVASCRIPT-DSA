const checkOdd =(num)=>{
    if(num%2!==0){
        return true;
    }
    return false;
}

let arr=[21,4,6,8,10];
let count=0;
let i=0;
let arrOdd=[]

for(i;i<arr.length;i++){
    if(checkOdd(arr[i])){
       arrOdd.push(arr[i])
    }
}
console.log(arrOdd);
    
