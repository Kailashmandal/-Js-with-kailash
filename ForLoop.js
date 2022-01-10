// for loop is used to iterate over a array or performing a task repeatedily

// for(let i=0;i<11;i++){
//     console.log(i) // this will just print 0 to 10;
// }

/** lets iterate over an array */
const array=['rajastan' ,
'delhi ',
 'assam' ,
  'haryana',
  'mumbai'
];

for(let i=0;i< array.length;i++){

    if(typeof array[i] !=="string") continue; // checking for other values
    console.log(array[i]);
}
