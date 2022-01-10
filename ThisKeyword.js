/**
 * 
 *  "This"     keyword is used to point to window object for all regular function calls.
 * 
 */
console.log(this);  // this will give an empty { } block 

var user={
    name :'kailash',
    courseCount: 4,
    getCourseCount : function(){
        // here this contain whole object entity
        console.log("On line 12 " , this);
        console.log(this.courseCount); // thsi will give 4 actual course count
    }
}

user.getCourseCount(); // this is not a regular function calling it is invoked by objectName.functionName( ); ( or it is object function call)


var user1={
    name :'kailash',
    courseCount: 4,
    getCourseCount : function(){
        // here this contain whole object entity
        console.log("On line 12 " , this);
        console.log(this.courseCount); // thsi will give 4 actual course count

        function sayHello( ){
              console.log("hello");
              console.log("line number 31 " , this); // ' this ' here will give global object and on browser it will give window object because it is regular function 
         }
         sayHello() ; // this is normal function call inside a iregular object  function
    }
}

user1.getCourseCount( ); // calling irregular object function in the object 
