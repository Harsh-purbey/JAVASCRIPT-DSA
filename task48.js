const checkOdd =(num)=>{
    if(num%2!==0){
        return true;
    }
    return false;
}

let range1=9;
let range2=98;
let sum=0;

for(range1;range1<=range2;range1++){
    if(checkOdd(range1)){
        sum +=range1
    }
}

console.log(sum);
