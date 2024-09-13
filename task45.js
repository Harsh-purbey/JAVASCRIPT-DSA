const checkOdd =(num)=>{
    if(num%2!==0){
        return true;
    }
    return false;
}

let n=98;
let i=1;
let sum=0;

for(i;i<=n;i++){
    if(checkOdd(i)){
        sum +=i; 
    }
}

console.log(sum);
