 //reduce method 
 //two argument is used 1. accumulator : which store the value of previous current value 
 //                     2. current value : it holds the current value from arraay 
 
 //syntax:   .reduce(function(<accumulatorvaraiblename> , <currentvaluevariablename> ))
 
 //example:

 const mynum=[5,7,4,80]

 const mytotal=mynum.reduce(function(acc,currentvalue){
    console.log(`acc:${acc}andcurrentvalue:${currentvalue}`)      //traversing each value of accumulator and current value 
    return  acc+currentvalue   //adding the values of an array  
 },0)    //0 <<-- 0 is given to start accumulator as zero

 console.log(mytotal)




 //arrow fucntion + reduce method
    const mytotal1 = mynum.reduce((acc,currv)=>acc+currv,0)      //0 is start value of acc 
    console.log(mytotal)


    //above two line code also minimize like this 
        console.log(mynum.reduce((acc,currv)=>acc+currv,0) )




const shoppingcart=[{
    itemname:'java',
    price:200
}
,{
    itemname:'APPDEV',
    price:299
},
{
    itemname:'DSA',
    price:397
},
{
    itemname:'KOTLIN',
    price:300
},
{
    itemname:'WEBDEV',
    price:400
}]
console.log(shoppingcart.reduce((acc,item)=>acc+item.price,0))