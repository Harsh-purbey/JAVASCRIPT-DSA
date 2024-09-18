let arr =[1,2,3,4,5,6,7,8,9];
let index = Math.floor(arr.length/2);
let middle ;
if(arr.length%2===0){
middle= arr.slice(index-1,index+1);
}
else{
    middle= arr.slice(index,index+1);  
}
console.log(middle);

