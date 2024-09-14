let arr =[1,2,3,4,5,6,7,8,9];
let check =6;
let flag=false;

let i=0;
for(i;i<arr.length;i++){
    if(arr[i]===check){
        flag=true;
        break;
        
    }
}
console.log(flag);
