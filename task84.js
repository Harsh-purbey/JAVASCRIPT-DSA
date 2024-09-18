let arr = ['harsh','adarsh','divakar','manA'];
let flag = true;
arr.forEach((value) => {
    if(value.length<4){
        flag=false
    }
})
console.log(flag?"GRATER THAN 3":"LESS THEN EQUAL TO 3")


