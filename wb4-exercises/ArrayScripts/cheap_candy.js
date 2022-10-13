//EXERCISE 2 / SLIDE-27 / PAGE 2-23

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},

    //TODO: fill the array with 10 candles of various price ranges
];

function getCheap(prod){
    for(let r = 0; r<products.length; r++){
        let p = products.price
        if(p <= 4){
            console.log("UNDER $4: " + prod);
        }else {
            console.log("struggle");
        }
    }
}

for(let i = 0; i< products.length; i++){
    getCheap(products[i]);
}