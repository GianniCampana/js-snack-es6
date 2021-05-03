$(function(){


    let ogg = {
        tab: ['Facebook','Instagram','Github'],
        tabActive: 1
    };
    
    var {tab,tabActive} = ogg;

     let newArr = tab.filter((el)=>{
         if(tab[el]===tabActive){
             tab.splice(el,1)
         }
         return tab
     })
     console.log(newArr);

});/* end document */




 




/* console.log(tab);
console.log(tabActive);
 */

/* if(tab[element] == tabActive){
    tab.splice(element,1)
    
}
console.log(tab); */


/* tab.forEach((element)=>{
    let posiz = tab[element];
 if(posiz == tabActive){
     tab.splice(element,1)
 }
 return tab */