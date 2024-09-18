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

let arr =[1,4,6,8,9];
let flag = false;
flag = arr.find((value) => {
    if(checkPrime(value)){
        return true;
    }
}
)

console.log(flag?"PRIME":"NOT PRIME");
