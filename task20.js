num1 = 36;
num2 = 60;

let result;

if(num1<num2){
    result=num1;
}
else{
    result=num2;
}

while(result){

    if( num1%result===0 && num2%result===0 ){
        console.log(result);
        break;     
    }

    result--;
}