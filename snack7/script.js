$(function(){
  


    const cars = [
        {
          marca: 'fiat',
          modello: 'panda',
          alimentazione : 'diesel'
        },
        {
          marca: 'fiat',
          modello: 'punto',
          alimentazione : 'metano'
        },
        {
          marca: 'bmw',
          modello: 'serie-1',
          alimentazione : 'benzina'
        },
        {
          marca: 'audi',
          modello: 'a3',
          alimentazione : 'benzina'
        },
        {
          marca: 'honda',
          modello: 'jazz',
          alimentazione : 'elettrica'
        },
        {
          marca: 'citroen',
          modello: 'c3',
          alimentazione : 'metano'
        },
        {
          marca: 'porche',
          modello: 'carrera',
          alimentazione : 'benzina'
        },
        {
          marca: 'alfa-romeo',
          modello: 'giulietta',
          alimentazione : 'diesel'
        },
        {
          marca: 'alfa-romeo',
          modello: 'spider',
          alimentazione : 'metano'
        },
        {
          marca: 'audi',
          modello: 'a4',
          alimentazione : 'elettrica'
        },
    ];

      let carBenzina = [];
      let carDiesel = [];
      let carRimaste = [];
    
    cars.forEach((car)=>{
      
      if(car.alimentazione === 'benzina'){
          carBenzina.push(car)
      }else if(car.alimentazione === 'diesel') {
          carDiesel.push(car)
      } else{
          carRimaste.push(car)
      }

    });

    let listaBenzina = $('#benzina');
    let listaDiesel = $('#diesel');
    let listRimaste = $('#rimaste');

    printCars(carBenzina, listaBenzina);
    printCars(carDiesel, listaDiesel);
    printCars(carRimaste, listRimaste);

    function printCars(arr, target){
        arr.forEach((car)=>{
            let {marca,modello,alimentazione} = car;

            let html=
            `
             <li>
             Marca:${marca}<br>
             Modello:${modello}<br>
             Alimentazione:${alimentazione}
             </li>

            `;

            target.append(html)
        });  
    }
});