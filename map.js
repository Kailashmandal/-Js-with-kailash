/**
 *  Maps is js : Maps holds the key value pair in an array and also remembers its key-value insertion order.
 * 
 *   
 */

// Map.prototype have many function and size property to do manipulations on a Map object 
// creating a map 

// 1st way -

const map1= new Map( ) ; // this is consturctor for creating an empty map object

// 2nd way -

const myMap=new Map(  
       [
           [ 1,1000],
           [ 2,2000],
           [ 3,3000],
           [ 4,4000]
       ]
)

// we can create a map like this also by providing the 2d array of key value [ key , value ]

console.log(myMap);
/** output will be : Map(4) { 1 => 1000, 2 => 2000, 3 => 3000, 4 => 4000 }
 * 
 *   1 is associated with 1000
 *  2 with 2000 ....
 */

// setting and get the key value 

myMap.set(5, 5000) ; // .set( key , value ) is used to set a key value pair in map object

console.log(`
value associated with 5 is : ${myMap.get(5)}
`);
 // get(key )   is used to get the value associted with provided key


 // size is property of map objects used to get the size of map objects

 console.log('size of myMap is ' ,myMap.size);

 // .delete(key)   is a function used to delete the value associated and key provided from a map and return true if key got deleted 

 isDeleted=myMap.delete(5);
console.log(isDeleted);
 console.log(myMap); // you will see 5 is not present

 /**
  *  has(key )    accepts a key an returns true or false whether the key is present or not 
  */
 console.log('is key 4 present',myMap.has(4));

 /** Iterating over the maps using for..of loop : this loop actually returns an array of the key-value pair in each iteraton
  */

 for(let [key, value] of myMap){
     console.log(`
      key is ${key} => value is  ${value}
     `);
 }

 // we can actually iterate over keys and values only 

 for(let key of myMap.keys()){ // use .keys( ) for iterating over keys in map object
     console.log(`keys is ${key}`);
 }

// use .values( ) for iterating over the values of a map object 
for(let value of myMap.values()){
    console.log(`value is ${value}`);
}

/** using forEach( function ) fo iteration of maps 
 * 
 *  forEach(function  )  method accepts a function (arrow function , call back func. or inline callback function)
*/

console.log('using forEach method');
myMap.forEach(callbackfun );
function callbackfun(value , key) {

     console.log(`key is ${key} : value is ${value}`);
}
/**
 *  we can iterate over values of map object using forEach( ) method
 */


console.log('iterating over values only using forEach');
myMap.forEach( (value)=>(
    console.log(value)
));

/**
 * using inline call back and forEach method
 */

console.log('using inline call back and foEach method');
myMap.forEach(function(value){
    console.log(value);
});

/**
 *  Relationship between array maps : 
 * 
 *   map object structure is same as 2D key-value arrays .
 * 
 *  for example a map can be understood like this 👍
 *          [
 *           [key1 , value1]
 *           [key2 , value2]
 *          [key3 , value3]
 *                             ]
 */

// we can convert map into 2d key-value array and vice-versa

const myArray= Array.from(myMap);
console.log('array converted from map : ',myArray);

// converting 2d key-value array to map
const arr=[        ['key1' , 'value1']  , ['key2', 'value2'] ,  ['key3', 'value3']     ];  // this is an array

// use normal map constructor with parameter ( array) to convert array to map
const convertedFromArray= new Map(arr);

console.log('map converted from array is : ' , convertedFromArray);
