/*
 (PARI o DISPARI)
 L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
 Generiamo un numero random (sempre da 1 a 5) per il computer.
 Sommiamo i due numeri e stabiliamo se la somma dei due numeri
 è pari o dispari (usando una funzione) e dichiariamo chi ha vinto.
*/

// DOMANDE PER L'UTENTE TRAMITE I COLLEGAMENTI DEI TAG DAL HTML
//recupero bottone
const button = document.getElementById("paly");
//recupero tag "p" per il risultato finale
const resultEl = document.getElementById("result");
//recupero input radio
const evenRadio = document.getElementById("even");
const oddRadio = document.getElementById("odd");
//recupero tag "selec" per scegliere il numero
const myNumber = document.getElementById("mynumber");

// CREAZIONE EVENTO AL "click" DEL BOTTONE
button.addEventListener("click", playGame);

// FUNZIONE AL "click"
function playGame() {
  // IL NUMERO DELL'UTENTE SARA' QUELLO SELEZIONATO DAL TAG "select"  
  const userNumber = Number(myNumber.value);
  // GENERO IL NUMERO DEL COMPUTER
  const pcNumber = Math.floor(Math.random() * 5) + 1;
  // LA SOMMA SARA' DATA DAL NUMERO UTENTE PIU' NUMERO COMPUTER
  const sum = userNumber + pcNumber;
  
  // VARIABILE PER IL MESSAGGIO FINALE
  let message;
  
  // "if" PER L'INPUT RADIO PARI
  if (evenRadio.checked) {
    // SE IL RESTO DELLA SOMMA E' ZERO STAMPA QUESTO
    if (sum % 2 === 0) {
      message = "Hai vinto! La somma dei tuoi e del computer è pari";
      console.log("Hai vinto!");
    // ALTRIMENTI STAMPA QUESTO
    } else {
      message = "Hai perso. La somma dei tuoi e del computer è dispari";
      console.log("Hai perso");
    }

    // "else" PER L'IMPUT RADIO DISPARI
  } else if (oddRadio.checked) {
    // SE IL RESTO DELLA SOMMA E' ZERO STAMPA QUESTO
    if (sum % 2 !== 0) {
      message = "Hai vinto! La somma dei tuoi e del computer è dispari";
      console.log("Hai vinto!");
      // ALTRIMENTI STAMPA QUESTO
    } else {
      message = "Hai perso. La somma dei tuoi e del computer è pari";
      console.log("Hai perso");
    }

    // "else" SE L'TENTE NON SELEZIONA PRIMA O PARI O DISPARI
  } else {
    message = "Per favore seleziona pari o dispari prima di giocare";
    console.log("Per favore seleziona pari o dispari prima di giocare");
  }

  document.getElementById("result").innerHTML = message;
}

/*
// DOMANDE PER L'UTENTE 
const radioEven = document.getElementById('even');
const radioOdd = document.getElementById('odd');
const myNumebr = document.getElementById('mynumber');

// CONTROLLO SE L'UTENTE HA SCRITTO O "PARI" O "DISPARI"
if (evenOdd != "pari" && evenOdd != "dispari") {
    alert("La Scelta NON è Corretta!")
}

// DOMANDE PER L'UTENTE 
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
*/

