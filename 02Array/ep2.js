//7

const marvelheroes =["thor","ironman","spiderman"]
const dcheroes=["superman","flash","batman"]

marvelheroes.push(dcheroes)  //will push as dcheroes as single array in another marvelhreros array
console.log(marvelheroes)    //takes any value or type of data as input

console.log(marvelheroes[3][1])

//8 concatenate

const allheros=marvelheroes.concat(dcheroes)     //merge both array and elemnt lies as element of a single array 
console.log(allheros)


//9 spread        -->>> will spread all values of both array and then merge both
const allnewhero =[...marvelheroes,...dcheroes]
console.log(allnewhero)

//10 flat 
const array=[1,2,3,[34[4,34,5,[67,5[65]]]]]
const real_array = array.flat(Infinity)
console.log(real_array)



console.log(Array.isArray("ankit"))  //will tell array or not 
console.log(Array.from("ankit"))  //convert into array
console.log(Array.from({name:"ankit"}))   //intersting for interviews  , should be tell ehich should make array
