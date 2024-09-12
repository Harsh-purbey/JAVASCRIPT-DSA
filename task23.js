let n=9;
let a=0;
let b=1;
let i=1;
while(i<=n){
    console.log(a);
    let temp = a+b;
    a=b;
    b=temp;
    i++;
}