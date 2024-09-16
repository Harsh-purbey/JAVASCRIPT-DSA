let arr =[1,2,3,4,5,6,7,8];
let facArr = arr.map((value) => {
    let fac=1;
    for(let i=1;i<=value;i++){
        fac *=i;
    }
    return fac;
})
console.log(facArr);
