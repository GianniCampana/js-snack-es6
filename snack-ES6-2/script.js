




    let lista = [1,2,3,4,5,6,7,8,9];

    const miaFunzione = (arr,min,max) => {
        let arrFil = [];
        for(let i=min; i<max; i++){ 
            arrFil.push(arr[i]); 
        }
        return arrFil;
        }
    
    let arrFiltrato = miaFunzione(lista,2,6);
    console.log(arrFiltrato);
    
    
  
    
    