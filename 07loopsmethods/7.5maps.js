const mynum=[1,2,3,4,5,6,7,8]
 
//const num=mynum.map((num)=> {return num>6})
//const num=mynum.map((num)=> num>6)    //  above both case are same , in both they check the conditon and return true and false in array like [fale,,false,false,false......,true,true] wherasfilter give the ouptue those only ewhich satisfy the condition
const num=mynum.map((num)=> {return num+10})
console.log(num)


//chaining   by map

const newnus=mynum
                .map( (num)=>num*10)     //agle map method me jo value jayegi wo iski updated value rhegi 

                .map( (num) => num+1)
                .filter( (num) => num >=40)
                .filter((num)=>num%3==0)
console.log(newnus)



