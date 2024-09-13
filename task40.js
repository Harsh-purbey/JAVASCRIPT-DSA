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
let i=1;

for( i; i<1000 ;i++){

    if(checkPrime(i)===true){
        sum +=i;   
    }

}
console.log(sum);

