let num = 151;
let temp = String(num);
let rev =0;
let i=temp.length-1;
while(i>=0){
    rev = rev * 10 + Number(temp[i]);
    i--;
}

if(rev===num){
    console.log('PALINDROM'); 
}
else{
    console.log('NOT PALINDROM');
}