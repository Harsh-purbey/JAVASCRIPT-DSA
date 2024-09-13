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
let range1=13;
let range2=99;



    let i=range1;
    for( i; i<=range2 ;i++){

        if(checkPrime(i)===true){
            sum +=i;   
        }
    
    }
    console.log(sum);


