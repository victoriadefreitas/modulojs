console.log (`working with lists`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const destinationsList = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

destinationsList.push (`Curitiba`) //adicionando a uma lista
console.log (`Possible destinations`);
//console.log (salvador, saoPaulo, rioDeJaneiro);


destinationsList.splice(1,1);

console.log (destinationsList);
console.log (destinationsList[1]);

