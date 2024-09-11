let str = 'avgfcsdertujnbvffdxcv';
let count =0;
let find ='f';
for(let i=0 ;i<str.length;i++){
    if(str[i]===find){
        count++
    }
}
console.log(`${count} times '${find}' Occurs`);

