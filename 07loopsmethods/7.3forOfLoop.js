//for of loop    -->.array specific loops
 

//["","",""]
//{"","",""}
const arr =[1,2,3,4,5]
//  syntax :  for(<datatypofiteraotr> <iterator> of <object>  )       //object means -> kiske upar lagana hai

for(const i of arr){

console.log(i)

}





const greetings="hello world"
for(const greet of greetings)
{
    if(greet===" ")      //Here greet is always a character (string), so === ensures both type and value match.


    {
        continue
    }
    console.log(`each char is ${greet}`)
}




///Maps    <<--- is a dataatype in js , unique values hoti hai array ke jaise , holds key value pair   

    const map =new Map()
    map.set('IN',"india")
    map.set('usa',"united states of america")
    map.set('fr',"france")
    //map.set('IN',"india")    //--->> unique value 0nly 
    console.log(map)

 
    //for(const i of map)
    for(const [i,j] of map)
    {
        console.log(i,":" ,j)
    }

//check for the object 
    const myobject={
        'game1':'COC',
        'game2':'BGMI'
    }
    //  for(const [i,j] of myobject){
    //     console.log(i,":",j)           //myobject is not iterable like Map
    //  }

     for(const i in myobject){
        //console.log(myobject[i])       //it gives only value       
        console.log(`${i} is ${myobject[i]}`)
     }


    

    
//array ke liye bhi "for in" use kar skte hain like above b
//but map ke liye "for in" nhi use kar skte , kyuki map iterable nhi hota 


