const checkPrime = (num) => {
    if(num<=1){
        return false;
    }
    let i=2;
    while(i<=Math.sqrt(num)){
        if(num%i===0){
            return false;
        }
        i++;
    }
    return true;
}

let sum =0;
let num=17;

if(num>100){
    console.log('This Is Valid For Number <= 100'); 
}

if(checkPrime(num)){
    let i=num;
    for( i; i<=100 ;i++){

        if(checkPrime(i)===true){
            sum +=i;   
        }
    
    }
    console.log(sum);
}
else{
    console.log(`${num} IS NOT PRIME`);
    
}

