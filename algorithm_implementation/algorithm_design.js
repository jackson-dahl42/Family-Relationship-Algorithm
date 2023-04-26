class Person {
    constructor(name, parent, gender) {
        this.name = name
        this.parent = parent
        this.gender = gender
    }
}

let Elizabeth = new Person("Elizabeth", null, "female")
let Marj = new Person("Marj", Elizabeth, "female")
let Rosanne = new Person("Rosanne", Elizabeth, "female")
let Kim = new Person("Kim", Marj, "male")
let JohnG = new Person("John G", Kim, "male")

function findPath(personA, personB) {
  let curPersonA = personA
  let curPersonB = personB
  let numUp = 0
  let numDown = 0
  while(true) {
    
    if (curPersonA === curPersonB) {
      return [numUp, numDown]
      break
    }
    if (curPersonA.parent != null) {
      curPersonA = curPersonA.parent
      numUp ++
    }
    if (curPersonB.parent != null) {
      curPersonB = curPersonB.parent
      numDown ++
    }
  }
}

function findPathRecursive(personA, personB) {
  if (personA === personB) {
    return [0,0]
  }
  if(personA.parent === null && personB.parent != null) {
    return addArrays([0,1], findPathRecursive(personA, personB.parent))
  }
  if(personB.parent === null && personA.parent != null) {
    return addArrays([1,0], findPathRecursive(personA.parent, personB))
  }
  else {
    return addArrays([1,1], findPathRecursive(personA.parent, personB.parent))
  }
}

function addArrays(arr1, arr2) {
  const arr = []
  for (let i = 0; i < arr1.length; i++) {
    arr.push(arr1[i] + arr2[i])
  }
  return arr
}

//Num ups
console.log(findPathRecursive(Elizabeth, JohnG)[0])
//Num downs
console.log(findPathRecursive(Elizabeth, JohnG)[1])

//Num ups
console.log(findPath(Elizabeth, JohnG)[0])
//Num downs
console.log(findPath(Elizabeth, JohnG)[1])

/* Algorithm #1 Pseudocode

class Person
define attribute name
define attribute parent
define attribute gender
end class

create tree using Person class to make people

let personA = person input
let personB = person input
let pathA = empty array
let pathB = empty array
loop forever
  let endOfPathA = the last element in pathA
  let endOfPathB = the last element in pathB
  if endOfPathA is equal to endOfPathB{
    the number of ups in the path = the number of the elements in the array minus 1
    the number of downs in the path = the number of the elements in the array minus 1
    consanguinity table
    break
  }
  other wise {
    push the parent of endOfPathA to the end of the pathA array
    push the parent of endOfPathB to the end of the pathB array
  }

*/