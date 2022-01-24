/**
 * classes : classes in js are template for making object that are encapsulate with data and methods to work on the data.
 */

// defining the classes 
class Shape{
    constructor(height , width){
        // this constructor function used to construct the instances of class
        this.height=height;
        this.width=width ;
    }

    // class can have methods as well
   area( ){
       // this returns the area of shape
       return this.height*this.width ;
   }

}

// create new objects of class

const square= new Shape(20,20);
// square is an object now
squareArea= square.area( ) ; 

console.log('area of square is ' , squareArea);

// exporting class into different file 

module.exports=Shape ; // using this we can export Shape to other file 