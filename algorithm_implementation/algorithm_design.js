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
let Monica = new Person("Monica", Marj, "female")
let Phil = new Person("Phil", Monica, "male")
let Lincoln = new Person("Lincoln", Phil, "male")
let Alex = new Person("Alex", Lincoln, "male")

function findNumberOfGenerations(personA, personB) {
  let numUp = 0
  let numDown = 0
  let curPersonA = personA
  let curPersonB = personB
  while(true) {
    if (curPersonA === curPersonB) {
      return [numUp, numDown]
      break
    }

    if (curPersonA === personB) {
      return [numUp, 0]
      break
    }

    if (curPersonA.parent != null) {
      curPersonA = curPersonA.parent
      numUp ++
    }

    if (curPersonA === curPersonB) {
      return [numUp, numDown]
      break
    }
    
    if (curPersonB === personA) {
      return [0, numDown]
      break
    }

    if (curPersonB.parent != null) {
      curPersonB = curPersonB.parent
      numDown ++
    }

  }
}

function consanguinityTable(numbOfGenerationsFromCommonAncestor) {
  let numUp = numbOfGenerationsFromCommonAncestor[0]
  let numDown = numbOfGenerationsFromCommonAncestor[1]
  if(numUp === 0 && numDown === 0) return " is "
  if(numUp === 1 && numDown === 0) return "is the child"
  if(numUp === 0 && numDown === 1) return " is the parent of "
  if(numUp === 1 && numDown === 1) return " is the sibling of "
}

function findRelation(personA, personB) {
  return personA.name + consanguinityTable(findNumberOfGenerations(personA, personB)) + personB.name
}
console.log(findNumberOfGenerations(Alex, Phil))
console.log(findRelation(Alex, Phil))

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