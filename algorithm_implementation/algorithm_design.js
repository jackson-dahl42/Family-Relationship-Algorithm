// Class for creating people or nodes in the family tree
class Person {
    constructor(name, parent, gender) {
        this.name = name
        this.parent = parent
        this.gender = gender
    }
}

// Create family tree
let Elizabeth = new Person("Elizabeth", null, "female")
let Marj = new Person("Marj", Elizabeth, "female")
let Rosanne = new Person("Rosanne", Elizabeth, "female")
let Ruthanne = new Person("Ruthanne", Elizabeth, "female")
let Donnie = new Person("Donnie", Elizabeth, "male")
let Patricia = new Person("Patricia", Elizabeth, "female")
let Kim = new Person("Kim", Marj, "male")
let Monica = new Person("Monica", Marj, "female")
let Martin = new Person("Martin", Marj, "male")
let Gabe = new Person("Gabe", Marj, "male")
let John = new Person("John", Marj, "male")
let Ben = new Person("Ben", Marj, "male")
let Jerome = new Person("Jerome", Marj, "male")
let JohnG = new Person("John G", Kim, "male")
let Jamie = new Person("Jamie", Kim, "male")
let Julia = new Person("Julia", Kim, "female")
let Phil = new Person("Phil", Monica, "male")
let Alley = new Person("Alley", Monica, "female")
let Anna = new Person("Anna", Monica, "female")
let Steven = new Person("Steven", Monica, "male")
let Ellane = new Person("Ellane", Gabe, "female")
let Jake = new Person("Jake", Gabe, "male")
let Veera = new Person("Veera", Jerome, "female")
let Precila = new Person("Precila", Jerome, "female")
let Clarence = new Person("Clarence", Jerome, "male")
let Lincoln = new Person("Lincoln", Phil, "male")
let Mo = new Person("Mo", Ellane, "male")
let Alex = new Person("Alex", Lincoln, "male")

// Algorithm that finds number of generations up and number of generations down from personA to personB
function findNumberOfGenerations(personA, personB) {
  if(personA === personB) return [0,0]
    let pathA = [personA]
    let pathB = [personB]
    for(;;) {
      let curPersonA = pathA[pathA.length - 1]
      let curPersonB = pathB[pathB.length - 1]
      if(curPersonA === curPersonB) {
        for(;;) {
          curPersonA = pathA[pathA.length - 1]
          curPersonB = pathB[pathB.length - 1]
          if(curPersonA != curPersonB) {
            break
          }
          else {
            pathA.pop()
            pathB.pop()
          }
        }
        return [pathA.length, pathB.length]
        break
      }
      if(curPersonA.parent != null) {
        pathA.push(curPersonA.parent)
      }
      if(curPersonB.parent != null) {
        pathB.push(curPersonB.parent)
      }
    }
}

/*
Consanguinity table to find relationship based on number of generation from the common ancestor.
This could later be turned into an algorithm as it has reoccurring patterns.
For example the prefix of great and grand, as well as the suffix for once removed, twice removed etc...
*/


function consanguinityTable(numbOfGenerationsFromCommonAncestor, gender) {
  let numUp = numbOfGenerationsFromCommonAncestor[0]
  let numDown = numbOfGenerationsFromCommonAncestor[1]
  if(gender === "male") {
    if(numUp === 1 && numDown === 0) return " is the son of "
    if(numUp === 2 && numDown === 0) return " is the grandson of "
    if(numUp === 3 && numDown === 0) return " is the great grandson of "
    if(numUp === 4 && numDown === 0) return " is the great great grandson of "
    if(numUp === 5 && numDown === 0) return " is the great great great grandson of "
    if(numUp === 0 && numDown === 1) return " is the father of "
    if(numUp === 0 && numDown === 2) return " is the grandfather of "
    if(numUp === 0 && numDown === 3) return " is the great grandfather of "
    if(numUp === 0 && numDown === 4) return " is the great great grand father of "
    if(numUp === 0 && numDown === 5) return " is the great great great grand father of "
    if(numUp === 1 && numDown === 1) return " is the brother of "
    if(numUp === 2 && numDown === 1) return " is the nephew of "
    if(numUp === 3 && numDown === 1) return " is the great nephew of "
    if(numUp === 4 && numDown === 1) return " is the great-grand nephew of "
    if(numUp === 5 && numDown === 1) return " is the great great-grand nephew of "
    if(numUp === 1 && numDown === 2) return " is the uncle of "
    if(numUp === 1 && numDown === 3) return " is the great uncle of "
    if(numUp === 1 && numDown === 4) return " is the great-grand uncle of "
    if(numUp === 1 && numDown === 5) return " is the great great-grand uncle of "
  }
  if (gender === "female") {
    if(numUp === 1 && numDown === 0) return " is the daughter of "
    if(numUp === 2 && numDown === 0) return " is the granddaughter of "
    if(numUp === 3 && numDown === 0) return " is the great granddaughter of "
    if(numUp === 4 && numDown === 0) return " is the great great granddaughter of "
    if(numUp === 5 && numDown === 0) return " is the great great great granddaughter of "
    if(numUp === 0 && numDown === 1) return " is the mother of "
    if(numUp === 0 && numDown === 2) return " is the grandmother of "
    if(numUp === 0 && numDown === 3) return " is the great grandmother of "
    if(numUp === 0 && numDown === 4) return " is the great great grand mother of "
    if(numUp === 0 && numDown === 5) return " is the great great great grand mother of "
    if(numUp === 1 && numDown === 1) return " is the sister of "
    if(numUp === 2 && numDown === 1) return " is the niece of "
    if(numUp === 3 && numDown === 1) return " is the great niece of "
    if(numUp === 4 && numDown === 1) return " is the great-grand niece of "
    if(numUp === 5 && numDown === 1) return " is the great great-grand niece of "
    if(numUp === 1 && numDown === 2) return " is the aunt of "
    if(numUp === 1 && numDown === 3) return " is the great aunt of "
    if(numUp === 1 && numDown === 4) return " is the great-grand aunt of "
    if(numUp === 1 && numDown === 5) return " is the great great-grand aunt of "
  }
  if(numUp === 0 && numDown === 0) return " is "
  if(numUp === 2 && numDown === 2) return " is the first cousin of "
  if(numUp === 2 && numDown === 3 || numUp === 3 && numDown === 2) return " is the first cousin once removed of "
  if(numUp === 2 && numDown === 4 || numUp === 4 && numDown === 2) return " is the first cousin twice removed of "
  if(numUp === 2 && numDown === 4) return " is the first cousin thrice removed of "
  if(numUp === 3 && numDown === 3) return " is the second cousin "
  if(numUp === 3 && numDown === 4 || numUp === 4 && numDown === 3) return " is the second cousin once removed "
  if(numUp === 3 && numDown === 5) return " is the second cousin twice removed "
  if(numUp === 3 && numDown === 6) return " is the second cousin thrice removed "
  if(numUp === 4 && numDown === 4) return " is the third cousin "
  if(numUp === 4 && numDown === 5) return " is the third cousins once removed "
  if(numUp === 4 && numDown === 6) return " is the third cousins twice removed "
  if(numUp === 4 && numDown === 7) return " is the third cousin thrice removed "
}

function findRelation(personA, personB) {
  return personA.name + consanguinityTable(findNumberOfGenerations(personA, personB), personA.gender) + personB.name
}

console.log(findNumberOfGenerations(Patricia, Alex))
console.log(findRelation(Elizabeth, Alex))
