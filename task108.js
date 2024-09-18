let arr = [246,123,456,789];

for(let i=0;i<arr.length;i++){
    let value = Number(String(arr[i]).split('').reverse().join(''))
    arr[i]=value;
}
console.log(arr);

