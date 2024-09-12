let num =12345;
let temp = String(num);
let i=0;
let sum =0;

while(i<temp.length){
    sum += Number(temp[i]);
    i++;
}
console.log(sum);
