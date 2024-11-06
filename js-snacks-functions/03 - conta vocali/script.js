/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function vocali (parola){
    const lowerword = parola.toLowerCase();
    const parolaInArray = lowerword.split('');
    const numeroVocali = 0;
    for(let i = 0; i <= parolaInArray.lenght; i++){
        if ((parolaInArray[i] === a) || (parolaInArray[i] === e) || (parolaInArray[i] === i) || (parolaInArray[i] === o) || (parolaInArray[i] === u)){
            numeroVocali++
        }
        return numeroVocali;
    }
}

// Invoca la funzione qui e stampa il risultato in console

console.log(vocali(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)