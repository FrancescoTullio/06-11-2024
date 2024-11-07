/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function vocali (parola){
    const lowerword = parola;
    let numeroVocali = 0;
    for(let i = 0; i < lowerword.length; i++){
        if ((lowerword[i] === "a") || (lowerword[i] === "e") || (lowerword[i] === "i") || (lowerword[i] === "o") || (lowerword[i] === "u")){
            numeroVocali++;
        }
    }
    return numeroVocali;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(vocali(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)