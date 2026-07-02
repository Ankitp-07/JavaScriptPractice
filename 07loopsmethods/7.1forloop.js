//for loop

const myarray=[3,5,3,2,6,7,4]
for(let i=0;i<myarray.length;i++)
{
    //  const element=myarray[i]
    // console.log(element)


    //or


    console.log(myarray[i])
}

//console.log(element)  //-->>> not defined here 







for(i=1;i<10;i++)
{
    //console.log(`outerloop value:${i}`)
    console.log(`table of ${i} is : `)
    for(j=1;j<10;j++ ){
   //console.log(`inner loop value: ${j} and ${i} `) 
   console.log(i+'*'+j+'=' +i*j )
    }
}

let myarrray1=["flash","batman","superman"]
console.log(myarrray1.length)




//keywords  ::::::      break , continue

for(let i =0;i<10;i++)
{
    if(i==5)
    {
        console.log(`detected ${i} , loops will terminate here `)
        break     //terminate the loop at matched case
    }
    console.log(i)
}

console.log("example for continue :")
for(let i =0;i<10;i++)
{
    if(i==6)
    {
        console.log(`detected ${i} ,this will skips`)
        continue    //skips the iteration for matched case 
    }
    console.log(i)
}
