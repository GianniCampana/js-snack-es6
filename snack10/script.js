$(function(){
    const people = [
        {
            name: 'Francesco',
            lastname:'Esposito',
            age: 24
        },
        {
            name: 'Mario',
            lastname:'Rossi',
            age: 12
        },
        {
            name: 'Antonio',
            lastname:'Bianchi',
            age: 15
        },
        {
            name: 'Roberto',
            lastname:'Verdi',
            age: 31
        }
    ];
    
    const plus18 = people.map((person)=>{
        let {name,lastname,age} = person;
        let html= 
            `
             <li>
             Il cittadino ${name} ${lastname} può guidare perchè la sua età è di ${age} anni.
             </li>
        
            `;
            let html2= 
            `
             <li>
             Il cittadino ${name} ${lastname} NON può guidare perchè la sua età è di ${age} anni.
             </li>
        
            `;
        if(person.age > 18){
            
            $('#plus18').append(html)
        }else{
            
            $('#plus18').append(html2)

        }
      
        return html
    })

     


});/* end document */

