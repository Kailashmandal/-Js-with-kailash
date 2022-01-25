let stocks={
    Fruits:['strawberry' , 'grapes', 'apple'],
    Liquid:['water' ,'milk'],
    Holder:['cone'],
    toppings:['chocolate' ,'peanuts']
};

let order=(fruit,production)=>{
    setTimeout( ()=>{
        console.log(`${stocks.Fruits[fruit]} flavour is selected. calling production...`);
        production();
    },2000)
}
let production=()=>{
    setTimeout(()=>{
        console.log('produnction is started !');

        setTimeout(()=>{
            console.log('fruits has been chopped');

            setTimeout(()=>{
                console.log(`${stocks.Liquid[1]} and ${stocks.Liquid[0]} was added.`);

                setTimeout(()=>{
                    console.log('machine is started !!');

                    setTimeout(()=>{
                        console.log(`${stocks.Holder[0]} is selected.`);

                        setTimeout(()=>{
                            console.log(`${stocks.toppings[0]} added as topping`);

                            setTimeout(()=>{
                                console.log('serve the ice-cream');
                            },2000)
                        },3000)
                    },2000)
                },1000)
            },1000)
        },2000)
    },0000)
};
order(0,production);
// call backs make relationship and this is called call back hell.
