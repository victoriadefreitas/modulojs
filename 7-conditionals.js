console.log (`working with lists`);


const destinationsList = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
const buyerAge = 10
const isAccompanied = false;
console.log (`Possible destinations`);
console.log (destinationsList);

if (buyerAge >= 18) {
    console.log ("Comprador maior de idade!")
    destinationsList.splice(1,1);
    

}else if (isAccompanied == true) {
        console.log("Comprador está acompanhado");
        destinationsList.splice(1,1);
    }else{
    
    console.log("Comprador menor de idade, não posso vender")
    }
console.log (destinationsList);