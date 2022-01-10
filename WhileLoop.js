const array=['rajastan' ,
'delhi ',
 'assam' ,
  'haryana',
  'mumbai'
];

let i=0;
while (i<array.length) {
    console.log(array[i++]);  // first printing then increasing i
}
/**
 * ForEach loops
 */
console.log("using callback function...");
array.forEach(   (s)=> console.log( s)  ); // use callback function inside foreach loop for printing the values
 