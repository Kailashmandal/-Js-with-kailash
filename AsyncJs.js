// this is synchronous way of doing the task
console.log('this is synchronous way of doing the task');
console.log('I');
console.log('eat');
console.log('ice cream');
console.log('with spoon');


/**
 *  setTimeout method allows to run a function after a specific aoumnt of time and
 *  to simulate the function with other tasks.
 *  Please keep in mind that the setTimeout is not a part of the JavaScript engine,
 *  it’s a part of something known as web APIs (in browsers) and C/C++ APIs (in node.js).
 */
/**
 *  syntax :   setTimeout( ()=> { } , time_interval in millisecoonds  )
 */
// this is asynchronous way 
console.log("\n\nthis is asynchronous way ");
 console.log('I');
 console.log('eat');
 setTimeout(() => {
     console.log('ice cream');
     // set timeout will set a timer and after that time statements callback function gets executed 
 }, 3000); // timer of 3 seconds is set for this task
 console.log('with spoon'); // first this got executed then uper code
 