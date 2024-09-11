function checkPrime(num){
    for(let i=2 ; i <= Math.sqrt(num) ;i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}

for(let i=2;i<=50;i++){
    if(checkPrime(i)){
        console.log(i);
        
    }
}

