### Family Tree Algorithm Design

The algorithm is being designed for the following problem:

> Given any two members in a family tree display the relationship of the first person to the second person.  Ie. George is the great grandparent of Stephen; or Jackson is the child of Emily.

The family tree I will use to test my algorithm is below.

![Family Tree](example_family_tree.png)

There are many ways to represent the family tree in code. You could create a graph or a tree or some other data stucture. The way I chose to represent the tree is that there is a person class and each person is given a name, a parent, and a gender.

~~~
/* Algorithm #1 Pseudocode

class Person
define attribute name
define attribute parent
define attribute gender
end class

create tree using Person class to make people

let currentpersonA = personA input
let currentpersonB = personB input
let numberofgenerationsup = 0
let numberofgeneratinsdown = 0
loop forever
if currentpersonA is equal to current personB
  then return the the numberofgenerationsup and numberofgenerationsdown and end loop
if they are not equal and currentpersonA has a parent
  then set currentpersonA to its parent and increase the numberofgenerationsup by 1
if currentpersonA is equal to current personB
  then return the the numberofgenerationsup and numberofgenerationsdown and end loop
if they are not equal and currentpersonB has a parent
  then set currentpersonB to its parent and increase the numberofgenerationsdown by 1

Input the numberofgenerationsup and numberofgenerationsdown into a consanguinityTable function
ex. if numberofgenerationsup is 0 and numberofgenerationsdown is 0 then personA is personB
    if numberofgenerationsup is 0 and numberofgenerationsdown is 1 then personA is the parent of personB
    if numberofgenerationsup is 1 and numberofgenerationsdown is 0 then personA is the child of personB
    if numberofgenerationsup is 1 and numberofgenerationsdown is 1 then personA is the sibling of personB
    etc...
*/
~~~

Here is an example of a consanguinity table below.

![Consanguinity Table](Table_of_Consanguinity_showing_degrees_of_relationship.svg.png)

## Runtime Efficiency/Complexity

If n is the number of people in the family tree then the algorithm has a different complexity based on the number of people in the tree and the shape of the paths in the tree. For example the worst case scenario of this algorithm is a tree that is straight line

Sources
https://en.wikipedia.org/wiki/Consanguinity
https://en.wikipedia.org/wiki/Lowest_common_ancestor
