# Doubly Linked List - A OOP JavaScript Exercise

By [Matthew Yang](http://www.matthewgyang.com).

## Description
This is an implementation of a doubly linked list written in JavaScript as a refresher exercise.  A doubly linked list is a linear data structure where each node of the list contains a value as well as a pointer to the previous and next nodes in the list (if they exists).  The list head points to the start of the list and allows us to traverse the list in order to find, replace and add values.

I started this by creating two object constructors, one for `Dll` which is my list and contains one property, the `head` which points to the first value of the list but is initialized to `null`.

I then created a `Node` constructor that takes a value as an argument, and also instantiates a `this.next` and `this.prev` and sets them both to `null`.

## Added Functions
Four functions were added to `Dll` via the prototype method: `Dll.prototype.functionName`, which is JavaScripts method of inheritance.  The benefit of establishing functions this way rather than in the constructor is less memory is used.  Rather than taking up memory for every function for every instance of the object created, it can reference the code that was attached to the prototype.

The four functions added are:

* `Dll.prototype.insert` - This function takes a `Node` object as an argument and will insert the node as the `head` of the list and set it's `.next` pointer to the former `head`, if it exists.  It will also set the next node's `.prev` pointer to the newly inserted node.  This function is a very efficient way of adding data to a list and is an O of 1, as no iterations are needed.

* `Dll.prototype.search` - Per the specs of this assignment, this function takes a value as an argument and will iterate through the list, starting at the head.  For the first node with a value that equals the argument, the function will return the node object itself.  The list is unchanged and the iteration breaks.

The efficiency of this function is directly related to the size of the array, and ultimately the location of the node with the equating value.  Worst case, if the value is not present in the array, this is a big O of n.

The weakness of this function is apparent if there are more than one nodes with the same value.  Another function that could be implemented fairly quickly could be a `.findAll` that would return an array of all `Node` objects that contain the desired value.

* `Dll.prototype.remove` - This function takes a value as an argument and iterates through the list, starting at the head, and if a node with a value that matches the argument is found, that node is removed from the list by changing the `.next` and `.prev` values of the two nodes on either side of the target.  The function then returns just the value of the node removed, which will match the argument value.

Similar to above, big O of n is the worst case if the value is not found.  Also like above, the weakness is it will remove the first node with the desired value, and another method that could be implemented could be `.removeAll`.

* `Dll.prototype.toString` - This is a basic function that will print out the values of the linked list as a comma separated string.

##Testing
BDD testing implemented through [npm](https://www.npmjs.com), specifically [Mocha](https://mochajs.org) and the [Chai](http://chaijs.com) assertion library.

##Credit
The core of this code was developed along side my classmante [John Nortz](https://github.com/JohnNortz)
