let arr = [
    {id:1,value:1},
    {id:2,value:1},
    {id:3,value:1},
    {id:4,value:1},
    {id:5,value:1},
];
let arrId =[];
for (let obj of arr){
    for(let key in obj){
      if(key === 'id') {
        arrId.push(obj.id)
      } 
    }
}
console.log(arrId);
