let num =12;
let flag =true;

let i=2;

while(i<= Math.sqrt(num)){
    if(num%i===0){
        flag=false;
        break;
    }
    i++;
}

if(flag){
    console.log(`${num} IS PRIME`);    
}
else{
    console.log(`${num} IS NOT PRIME`);
}