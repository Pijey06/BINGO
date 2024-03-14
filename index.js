console.log("SUP COMRADE!!!!");
generateNumber(75);

function generateNumber(max){
    //add = +
    //sub = -
    //mul = *
    //div = /
    //remainder = % 

    let randomNumber = Math.floor(Math.random() * max) + 1;
    
    //if... else if ... else 
    // GT >, GTE > =, LT <, LTE < =, EQ =, NEQ 
    if (randomNumber <= 15){
        console.log(`The number is B.`);
    } else if (randomNumber >= 16 && randomNumber <= 30) {
        console.log(`The number is I.`);
    } else if (randomNumber >= 31 && randomNumber <= 45) {
        console.log(`The number is N.`);
    } else if (randomNumber >=46 && randomNumber <= 60) {
        console.log(`The number is G.`);
    } else if (randomNumber >=61 && randomNumber <= 75) {
        console.log(`The number is O.`);
    } 
    else { 
        console.log(`The number is invalid`);
        }
    

    return console.log(randomNumber);
}