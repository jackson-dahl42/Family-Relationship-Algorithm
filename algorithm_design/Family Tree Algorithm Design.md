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

function to find number of generations up and down from A to B {
  let personA = person inputted
  let personB = person inputted
  if personA is personB then end loop and return [0 generations up, and 0 generations down]
  let pathA = array with personA
  let pathB = array with personB
  loop forever until told to stop
    let endOfPathA = the last element in pathA
    let endOfPathB = the last element in pathB
    if endOfPathA is equal to endOfPathB {
      loop forever until told to stop {
        let endOfPathA = the last element in pathA
        let endOfPathB = the last element in pathB
        if endOfPathA is not equal to endOfPathB then stop loop
        otherwise remove endOfPathA and endOfPathB from pathA and pathB
      }
     return [the number of elements in pathA, and number of elements in pathB]
     this will be an array that has number of generations up at [0]
     and number of generations down at [1]. This counts from personA to personB on tree. 
     stop loop
    } 
    other wise {
      push the parent of endOfPathA to the end of the pathA array
      push the parent of endOfPathB to the end of the pathB array
    }
}

Input the numberofgenerationsup and numberofgenerationsdown from the function above into a consanguinityTable function
    if numberofgenerationsup is 0 and numberofgenerationsdown is 0 then personA is personB
    if numberofgenerationsup is 0 and numberofgenerationsdown is 1 then personA is the parent of personB
    if numberofgenerationsup is 1 and numberofgenerationsdown is 0 then personA is the child of personB
    if numberofgenerationsup is 1 and numberofgenerationsdown is 1 then personA is the sibling of personB
    etc...
or create an algorithm that does the same thing rather than a table.
*/
~~~

Here is an example of a consanguinity table below.

![Consanguinity Table](Table_of_Consanguinity_showing_degrees_of_relationship.svg.png)

## Runtime Efficiency/Complexity

If n is the number of people in the family tree then the algorithm has a different run time based on the number of people in the tree and the shape of the paths in the tree. When I considered a straight line I theorize that the worst case complexity is O(2n), but because the complexity only cares about the rate of growth I ignore the constant and just say O(n), which means the algorithm is linear. I say this because in the worst case scenario of a straight line the where personA is the parent of personB the algorithm is set up so they go all the way up before they are equal. This part of the algorithm takes n steps. Then after the path of A and B reach the top, the algorithm goes and removes the people from the array that are the same. In this scenario this takes n steps. 

The algorithm as it is currently set up relies on a consanguinity table, so there is that limitation. For example you would not be able to run my code in a tree with 1000 generations. To solve this problem I will need to create an algorithm that can add suffixes and prefixes based on the number of generations up and the number of generations down which I certainly believe is possible.

Sources
https://en.wikipedia.org/wiki/Consanguinity
