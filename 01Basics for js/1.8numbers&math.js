


//************************************numbers***********************************

const score =400
console.log(score)
const balance = new Number(100)
console.log(balance);                //use of new make it a object 
 
console.log(balance.toString().length) 
console.log(balance.toFixed(1))  //precision , that is given after decimal
const othernum =23.9834
console.log(othernum.toPrecision(3))   //presion in give number , like 3 , then output will roundoff within 3 number
const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'))




 //*************************maths***************************




 console.log(Math.abs(-4))
console.log(Math.round(4.9))

console.log(Math.round(4.4))
console.log(Math.floor(5.9)) //only diaplay real integer value
console.log(Math.min(34,83,94))
console.log(Math.max(29,34,344,5,3,9))


// console.log(Math.random())   //Math.random() always gives values between 0 & 1 
// console.log((Math.random()*10) +1)    // if we want value greater than 1 , min vlaue will 1 in this case 


console.log(Math.floor(Math.random()*10) +1)  //will give only integer value  

//when min and max is given , and we have to genrate  random number 
const  min=10
const max=20

console.log(Math.floor(Math.random()* (max-min+1)) + min)   




















