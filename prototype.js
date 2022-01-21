/**
 * proto and prototype keywords
 * 
 * 
 *  everything almost everything in js is objects(whether it is function , user created objects , or arrays )
 *  and there are already set of property and functions defined for the each type of objects.
 * and these property and inbuilt functions get atteched to user created objects by Js engine with the 
 * help of          '__proto__'     which contains all the in built property and functions.
 * 
 *  "__proto__"  simpally means prototype of that type of object whichis built.
 */

// if we want to see prototype of an Array or Function or Object just do this in console : Object.prototype

/** and inheriting all of these property is known as prototypal inheritance */

/**
 *  declare an array 
 *  
 * var arr=[7,7,7]
 * 
 *  check its prototypal inherited property by using arr.__proto__ 
 * 
 *  in console of browser and you will see that constuctor type is Array and it is created by Array's constructor
 * 
 * now compare it with Array.prototype 
 * 
 * 👍 it will be same thus it is clear that our arr is inherited by Array's prototype
 * 
 * and you will find that function like fill , every , push ,shift , unshift are present there and inherited by our arr[ ] and this is prototypal
 * inheritence.
 * 
 *  arr.__proto__ = Array.prototype
 * 
 * arr.__proto__.__proto__ = Object.prototype
 * 
 * arr.__proto__.__proto__.__proto__ = null 
 * 
 * and since arr.__proto__.__proto__ is Object.protype we conclude that array is also an object
 */