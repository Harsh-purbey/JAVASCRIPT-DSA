let term =5;
let a=0;
let b=1;
let c=0;
let feb=` ${a} ${b} `;
for(let i=1;i<term-1;i++){
    c=a+b;
    a=b;
    b=c;
    feb =feb + `${c} `
}
console.log(feb);
