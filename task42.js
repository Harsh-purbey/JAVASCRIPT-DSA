const checkOdd =(num)=>{
    if(num%2!==0){
        return true;
    }
    return false;

}

let i;
let num =52;
let sum =0;

if(checkOdd(num)){
    for(i=num;i<100;i++){
        if(checkOdd(i)){
            sum +=i;   
        }
    }
    console.log(sum);
}
else{
    console.log(`${num} is not odd`);
    
}

