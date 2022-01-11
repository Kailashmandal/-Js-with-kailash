var original=[true ,false ,true, false,true];

// by slice method
var copy1= original.slice(0);

// by spread operator
var copy2=[...original] ;

// both of these are shallow copy of original array
console.log(copy1 , copy2);

// DEEP Copy : shallow copy didn't work when we have array or object inside and array

// example : 

var array=[[1,2,3] , 0,9,8,7] ;

var arrayCopy =array.slice(0);

arrayCopy[0].push("shallow copy") // since first element is an array we can push it into first element
/**
 * and when we are pushing into shallow copy it is directly get pushed into the original array's first element
 * because first element actually work as reference of array present at first place .
 */
console.log(arrayCopy[0] , array[0]);

// creating deep copy with JSON
var deepCopy= JSON.parse(JSON.stringify(array));
deepCopy[0].push("this is deep copy")
console.log(`the deepCopy is :[ ${deepCopy} ]and our array is :[ ${array}]`);