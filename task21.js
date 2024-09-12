let num = 123;
let temp = String(num)
let rev=0;
let i=temp.length-1;
while(i>=0){
    rev = rev * 10 +Number(temp[i]);
    i--;
}
console.log(rev);



