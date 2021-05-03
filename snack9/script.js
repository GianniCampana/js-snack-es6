$(function(){
    const animali = [
        {
            nome: 'leone',
            famiglia: 'felidi',
            classe: 'mammiferi'
        },
        {
            nome: 'cane',
            famiglia: 'canidi',
            classe: 'mammiferi'
        },
        {
            nome: 'gallina',
            famiglia: 'fasianidi',
            classe: 'uccelli'
        }
    ];
    
    
    const mammiferi = animali.filter((animale)=>{
    
        let arrMamm = [];
        
        if(animale.classe === 'mammiferi'){
            arrMamm.push(animale);
            return arrMamm;
        };
        
        
    });
    console.log(mammiferi);
})