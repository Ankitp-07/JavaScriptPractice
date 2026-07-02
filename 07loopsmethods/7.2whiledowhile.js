//while  loop


// while(1)       //condition likhte hn while ke sath 
// {
//    console.log("ankit")   ---->>>infinte loop chla jayega 
// }

console.log("ankit")

let i=0
while(i<10){
    console.log(`value of i is  ${i}`)
    i=i+2
}

let myarray=['ankit','anku','arya']
let i1=0
while(i1<myarray.length){
    console.log(`value is ${myarray[i1]}`)
    i1=i1+1

}


//do while 

    //pahle kaam hoga , condition baad me check hogi
 let score=1  
 //  score=11      //--->>>iss case me bhi run hoga , kyuki condition baad me check ho rhi hai
do{
    console.log(`score is ${score}`)
    score++
}while(score<=10)   

