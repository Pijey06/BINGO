console.log("SUP COMRADE!!!!");
//generateNumber(75);

let isB = false,
isI = false,
isN = false,
isG = false,
isO = false;

function generateNumber(max){
    //add = +
    //sub = -
    //mul = *.
    //div = /
    //remainder = % 

    let randomNumber = Math.floor(Math.random() * max) + 1;
    
    //if... else if ... else 
    // GT >, GTE > =, LT <, LTE < =, EQ =, NEQ 
    if (randomNumber <= 15){
        isB = true;
        console.log(`The number is B.`);
    } else if (randomNumber >= 16 && randomNumber <= 30) {
        isI = true;
        console.log(`The number is I.`);
    } else if (randomNumber >= 31 && randomNumber <= 45) {
        isN = true;
        console.log(`The number is N.`);
    } else if (randomNumber >=46 && randomNumber <= 60) {
        isG = true;
        console.log(`The number is G.`);
    } else if (randomNumber >=61 && randomNumber <= 75) {
        isO = true;
        console.log(`The number is O.`);
    } 
    else { 
        console.log(`The number is invalid`);
        }
    if (isB == true && isI == true && isN == true && isG == true && isO == true) {
            console.log('Comrade you have a bingo!!!!!!!');
        }
    return console.log(randomNumber);
}
let counter = 10;