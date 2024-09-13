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

let arr=[1,2,3,4,5,6,7,8,9]
let i=0;
let sum =0;

for( i; i<arr.length ;i++){

    if(checkPrime(arr[i])===true){
        sum +=arr[i]
           
    }

}
console.log(sum);


