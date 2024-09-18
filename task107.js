let arr =[2,4,6,8,9];
let check =2;
let flag;
flag=arr.find((value) => {
    if(value%check!==0){
        return true;
    }
});
if(flag){
    console.log('NOT MULTIPLE OF ALL');   
}
else{
    console.log('MULTIPLE OF ALL');
    
}
