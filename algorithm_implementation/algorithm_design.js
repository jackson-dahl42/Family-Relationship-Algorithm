class Person {
    constructor(name, parent, gender) {
        this.name = name
        this.parent = parent
        this.gender = gender
    }
}

let Elizabeth = new Person("Elizabeth", null, "female")
let Marj = new Person("Marj", Elizabeth, "female")
let Rosanne = new Person("Rosanne", Rosanne, "female")

function findConnection(personA, personB) {
    let personApath = []
    let personBpath = []
    for(;;) {

    }
}

/* Algorithm #1 Pseudocode
Create a person class that contains a name, parent, and gender.
Create the family tree by creating each person
let pathA be an empty array
let pathB be an empty array
Push person A in path A
Push person B in path B
Start a loop that runs until the connection between person A and B is found.
Check if the last element of both path arrays are equal.
If equal then 



*/