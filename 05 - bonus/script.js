/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
const greetOnTime = (name) => {
    const now = new Date()
    const currentHour = now.getHours();
    let message = "" ;

    if (currentHour <= 4){
        message = "Buonanotte"
    }else if (currentHour <= 13){
        message = "Buongiorno"
    }else if(currentHour <= 17){
        message = "Buonpomeriggio"
    }else if (currentHour <= 24){
        message = "Buonanotte"
    }
    return `${message} ${name}`
}


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
const result = greetOnTime(name);
console.log(result);