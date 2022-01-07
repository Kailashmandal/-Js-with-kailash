/**
 * Array is just collection of data.
 * indexing start from 0 and goes up to size -1 
 * 
 */
// declaration of array
var countries=["india" , "usa" , "uae" ,"japan"];
console.log(countries);

// OR
var states=new Array("HR" ,"RR" ,"UP");

// accessing the elements just add index of element you want to access

console.log(states[1]);

// how to find length of array use : .length with array name
console.log(states.length);

// we can also replace the value
states[0]="Raj";
console.log(states);

// we can also store any type of the value in the array like string , number, boolean
var array=["kailash" , 21 , true];
console.log(array);

// how to delete a element ? use : pop() function

array.pop(); // last element is poped
console.log(array);

// we also have a function unshift(value) its add an element at 0th index and shift every element
array.unshift(7);
console.log(array);

// use shift function to delete first Element,
array.shift();
array.shift() // calling towice will delete two elements 
console.log(array);

// indexOf() : function return the index of the element in array if its not present it returns  -1
console.log(array.indexOf(21));
console.log(array.indexOf(7));
