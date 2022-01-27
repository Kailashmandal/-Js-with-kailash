/**
 * JSON stands for Javascript Object Notation. 
 * JSON is a text-based data format that is used to store and transfer data. 
 * 
 * 
 *  JSON DATA : JSON data consists of key/value pairs similar to JavaScript object properties.
 *  The key and values are written in double quotes separated by a colon :.
 *  key of json data should be in "" double quotes
 * 
 *  example : "name": "John"
 * 
 *  JSON OBJECTS : it is similar to js objects hold by { JSON DATA here }
 * 
 *  JSON ARRAY : it's a simple json data array or json objects array
 *  
 *  for example : 
 * 
  [ "apple", "mango", "banana"]

// JSON array containing objects
[
    { "name": "John", "age": 22 },
    { "name": "Peter", "age": 20 }.
    { "name": "Mark", "age": 23 }
]

 */

// a json object can contain json object and also arrays
const obj = {
    "_comment": "comment text goes here..." ,
    "name" : "kailash",
    "city" : "faridabad",
    "contact" : 455 ,
    "hobby" : {
        "games" : true,
        "food" : true,
        "study" : false,
        "programming" : true
    },

    "codeIn" : ['c++' , 'java' , 'javascript' ,'html' , 'css']
}
// json code do not support comments

// accessing the data from json object

console.log('object name is ', obj.name);
console.log('object city is ', obj.city);
console.log('codes in : ', obj.codeIn[0],obj.codeIn[2]);
console.log('object contact is : ', obj.contact);
console.log('object is programmer ? ', obj.hobby.programming);

/**
 * You can also convert JavaScript objects to JSON format as string
 *  using the JavaScript built-in JSON.stringify() function.
 */

let user={
    name: 'kailash',
    number : 6666,
    isVerified : true
}

let userJson = JSON.stringify(user);
console.log( typeof userJson); // JSON object as strings
console.log('userJson is : ', userJson);


/**
 * You can also convert JSON format to JavaScript objects 
 *  using the JavaScript built-in JSON.parse() function.
 */

 const obj1=`{
    "_comment": "comment text goes here..." ,
    "name" : "kailash",
    "city" : "faridabad",
    "contact" : 455 ,
    "hobby" : {
        "games" : true,
        "food" : true,
        "study" : false,
        "programming" : true
    },

    "codeIn" : ["c++" , "" , "'javascript'" ,"'html'" , "'css'"]
}`; 
jsObj= JSON.parse(obj1);
console.log(typeof jsObj); // object type is returned
console.log('jsobj is : ',jsObj);
