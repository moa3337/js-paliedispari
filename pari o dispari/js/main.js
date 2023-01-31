/*
 (PARI o DISPARI)
 L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
 Generiamo un numero random (sempre da 1 a 5) per il computer.
 Sommiamo i due numeri e stabiliamo se la somma dei due numeri
 è pari o dispari (usando una funzione) e dichiariamo chi ha vinto.
*/

// DOMANDE PER L'UTENTE 
const evenOdd = prompt("PARI o DISPARI?");
const userNumber = parseInt(prompt("scegli un numero da 1 a 5"));

// FUNZIONE PER CAPIRE SE IL NUMERO E' PARI
function even(number) {
    return number % 2 == 0;   
}

// FUNZIONE PER GENERARE UN NUMERO RANDOM DA 1 A 5
function randomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

// IL NUMERO RANDOM VIENE GENERATO QUI
let pcNumber = randomNumber();

// SOMMO NUM UTENTE A NUM COMPUTER
let sum = pcNumber + userNumber;

// CONTROLLO SE LA SOMMA E' PARI CON LA FUNZIONE DI PRIMA
let evenSum = even(sum);

// SE LA SOMMA PIU' LA SCELTA DELL'UTENTE E' PARI
//                       O
// SE LA SOMMA PIU' LA SCELTA DELL'UTENTE E' DISPARI                      
if ((evenSum && evenOdd === "pari") || (
    !evenSum && evenOdd === "dispari")) {
    
    // ALLORA STAMPA QUESTO    
    console.log("HAI VINTO!");

    // SE NO STAMPA QUESTO
} else {
    console.log("HAI PERSO!");
}



