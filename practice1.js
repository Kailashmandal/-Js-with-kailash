arr=[1,2,3,4,5,8,3,5];

function copyArray(arr){
 var hrr=arr.slice(0);
 console.log(hrr);
}

function firstNelements(arr , n){
    if(n==null){
        console.log(arr[0]);
        return;
    }
    var ourArray=arr.slice(0, n);
    console.log(ourArray);
}

function lastNelements(arr ,n){
    if(n==null){
        console.log(arr[arr.length-1]);
        return;
    }
  
    // let firstIdx=arr.length -n;

    // while (firstIdx <arr.length) {
    //      console.log(arr[firstIdx++]);
    // }


    for(let i=arr.length-1 ;i>=n ;i--){
        console.log(arr[i]);
    }

}
// copyArray(arr)
// console.log(hrr);

// firstNelements(arr ,3 );
lastNelements(arr,4);
