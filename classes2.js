const S= require('./classes.js');
// now we can use our exported file here

const rectangle= new S(10,20);

console.log(  'area of rectangle is ',
    rectangle.area()
);