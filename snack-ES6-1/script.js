const RandomNumber = (min, max) =>Math.floor(Math.random()*(max-min+1)+min);



const codiceGiocatore = (length) =>{
    const lettere = 'ABCDEFGHILMNOPQRSTUVZWYJKX';
    const numeri = '1234567890';
    let lettereTrovate = '';
    let numeriTrovati = '';

    for(let i=0; i<length; i++){
        var random = Math.floor(Math.random() * lettere.length);
        lettereTrovate += lettere.substring(random, random + 1);
    }
    for(let i=0; i<length; i++){
        let randomNum = Math.floor(Math.random() * numeri.length);
        numeriTrovati += numeri.substring(randomNum, randomNum + 1);
    }

    var codice = lettereTrovate + numeriTrovati;

    return codice;  
}
    


const arrGiocatori = [{firstname: 'Giovanni'},{firstname: 'Marco'},{firstname: 'Gianluca'},{firstname: 'Antonio'},{firstname: 'Pasquale'}];

for(let giocatore of arrGiocatori){
    let lunghezza = 3;
    giocatore.code = codiceGiocatore(lunghezza);
    giocatore.media = RandomNumber(0,50);
    giocatore.percentuale = RandomNumber(0,100);
}
    
console.log(arrGiocatori);







    

