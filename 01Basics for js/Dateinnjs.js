//DATEs


let mydate =new Date()
//console.log(mydate)
console.log(mydate.toString())   //display all the data time day date gmt 
console.log(mydate.toDateString())   //display only day and date 
console.log(mydate.toLocaleDateString())  //display mm/dd/yyyy
console.log(mydate.toLocaleString())       //display date and time
console.log(typeof(mydate))       //object


// let mycreatedate = new Date(2025,0,23)   //month starts form 0 -->> january
// console.log(mycreatedate.toDateString())     //day jan 23 2025

// console.log(mycreatedate.toLocaleDateString()) //    ->>> mm/dd/yyyy 


let mycreatedate = new Date(2025,0,23,5,3)
console.log(mycreatedate.toLocaleDateString())    



let mycreatedate1=new Date("2025-01-12") //if input is given like this then it take 1 as jan 
console.log(mycreatedate1.toLocaleDateString())
 

let  mytimestamp=Date.now()
console.log(mytimestamp)
console.log(mycreatedate.getTime())     //in miliseconds

console.log(Math.floor(Date.now()/1000))    //milisecond to second 



let newdate= new Date()
// console.log(newdate)
// console.log(newdate.getMonth()+1)   
// console.log(newdate.getDay())


newdate.toLocaleString('default',{
    weekday:"long",  //will give full name of days like thursday , thu , T
}

)
