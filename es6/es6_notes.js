// Arrays, objects

//ES6 Syntax/ fetures

//Arrays
let letter = ['a', 'b', 'c',]

//clone an array with spread operator

const clone = [...letters]   /// '...' is spread operator
const addMore = ['0',...letters, 'd', 'e']  // can also add into array

console.loh(letters)
console.log(clone)


console.log(clone == letters)  //same Array but not equal
console.log(clone === letters)

console.log(addMore)


//------------------------------------------------------------------------------
//          value      function             value
let arr = ['12', ()=>{console.log('here')}, 34]

//grab values and store in variables
//  variable
let [x,y,z] = arr

console.log(x)  //first
console.log(y)  // middle
console.log(z)  //last

console.log(y()) // call function 



//------------------------------------------------------------------------------


// Objects {}
//ket value pairs

let person = {name: 'frank', age:22, friends: ['tony', 'bob']}

// object cloning

let personClone = {...person}

let personCloneAddMore = {...person, dob: "june 1"}
let personCloneUpdateAge = {...person, age:23}




console.loh(person)
console.loh(personClone)
console.loh(personCloneAddMore)
console.loh(personCloneUpdateAge)


// snake case
my_age_here

//cammel case 
myAgeHere






