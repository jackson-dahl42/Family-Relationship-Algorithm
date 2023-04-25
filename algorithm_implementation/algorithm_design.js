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
  let pathA = [personA]
  let pathB = [personB]
  while(true) {
    endOfPathA = pathA[pathA.length - 1]
    endOfPathB = pathB[pathB.length - 1]
    if(endOfPathA === endOfPathB) {
      let numUps = pathA.length - 1
      let numDowns = pathB.length - 1
      console.log(numUps)
      console.log(numDowns)
      break
    }
    else {
      if(endOfPathA.parent != null) {
        pathA.push(endOfPathA.parent)
      }
      if(endOfPathB.parent != null) {
        pathB.push(endOfPathB.parent)
      }
    }
  }
}

findPath(Elizabeth, JohnG)

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