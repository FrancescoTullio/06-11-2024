/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function startWhit (nomi, lettera){
    const result = [];
    const upperLetter = lettera.upperletter;
    for (i = 0; i < nomi.length; i++){
        const currName = nomi[i];
        const arrayName = currName.split('');
        if(arrayName[0] === upperLetter){
            result.push(currName);
        }
    }
    return result
}

// Invoca la funzione qui e stampa il risultato in console

console.log(startWhit(names, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]