const checkOdd =(num)=>{
    if(num%2!==0){
        return true;
    }
    return false;

}

let i=1;

for(i;i<=50;i++){
    if(checkOdd(i)){
        console.log(i);
        
    }
}