/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function firstLetter(names){
    return names.map(name => name[0]);
}

// Invoca la funzione qui e stampa il risultato in console
const letters = firstLetter(names);
console.log(letters);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]