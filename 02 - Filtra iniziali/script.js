/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filterNamesByLetter(namesArray, letter){
    let result= [];
    for (let i = 0; i < namesArray.length; i++) {
       if (namesArray[i][0] === letter) {
        result.push(namesArray[i]);
       }
}
    return result;
}

// Invoca la funzione qui e stampa il risultato in console
const result = filterNamesByLetter(names, "A");
console.log(result)



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]