const arrPrimo = [1,2,3,4,5,6,7,8,9,10,12,13,14,15];
const arrSecondo = [1,2,3,4,5,6,7,8,9,10];

let maggiore = arrPrimo;
let minore = arrSecondo;

const randomNumber = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

if(arrPrimo.length === arrSecondo.length){
    console.log('Gli array sono uguali');
}else{
    while(arrSecondo.length<arrPrimo.length){
        arrSecondo.push(randomNumber(0,15))
    }
}

console.log(arrSecondo);
console.log(arrPrimo);



    
