$(function(){


    /* creo un array di stringhe */
    let arrStringhe = ['uno', 'due','tre','quattro','cinque'];
    
    /* con il map creo un nuovo array */
    let arrModificato = arrStringhe.map((str)=>{
        /* con lo split ogni stringa dell'array la trasformo in un array di caratteri */
      let arrStringa = str.split('');
      /* con touppercase trasformo ogni elemento [0] in maiuscolo */
      let maiuscolo = arrStringa[0].toUpperCase();
      /* faccio un ciclo dove sostituisco gli elementi maiuscoli con i minuscoli */
      for(i of maiuscolo){
          if(i !== arrStringa[0]){
              arrStringa[0] = i
          }
      }
      
        return arrStringa;

    });/* end map */
    
    /* con un altro map creo l'array nuovo e con join unisco gli elementi in una stringa */
    let newArray = arrModificato.map((arr)=>arr.join(''))
    console.log(newArray);

    




    
 
   
   
 



});/* end document */



 /* let arrStringa = str.split('');
    
    let maiuscolo = arrStringa[0].toUpperCase();
    let arrMaiuscolo = maiuscolo.split('');
   console.log(arrMaiuscolo[0]);
    return str  */