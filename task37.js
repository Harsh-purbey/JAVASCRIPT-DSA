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

let sum = 0;
let arr = [[1,2,3],[4,5,6],[7,8,9]]
let i=0;

for( i; i<arr.length ;i++){
 for(let j=0;j<arr[i].length;j++)
    if(checkPrime(arr[i][j])===true){
        sum +=arr[i][j];   
    }
}
console.log(sum);

