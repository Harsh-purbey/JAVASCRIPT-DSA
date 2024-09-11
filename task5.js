const arr=[10,20,30,40,50,60,70]
let avg =0;
let sum =0;
for(let i=0 ;i<arr.length; i++){
    sum +=arr[i]
}
avg= sum/arr.length;
console.log(avg.toFixed(2));
