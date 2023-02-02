/*
 Chiedere all'utente di inserire una parola. Creare una
 funzione per capire se la parola inserita è palindroma.
*/

// CHIEDO ALL'UTENTE DI INSERIRE UNA PAROLA
const userWord = prompt("scrivi una parola e ti dirò se è palindroma");

// "if" CHE SI COLLEGA ALLA FUNZIONE SOTTO
// SE L'"if" E' "true" SCRIVI QUESTO:
if (isPalindrome(userWord)) {
  console.log("Questa parola è palindroma");
  // ALTRIMENTI SCRIVI QUESTO:
} else {
  console.log("Questa parola NON è palindroma");
}

// FUNZIONE PER VERIFICARE SE LA E' PALINDROMA
function isPalindrome (word) {
    // DICHIARAZIONE PER LA PAROLA AL CONTRARIO
    let reverseWord = "";
    // CICLO PER CONTARE LA PAROLA E INVERTIRLA
    for (let i = 0; i < word.length; i++) {
        const element = word[i];
        reverseWord = element + reverseWord;
    }
    // STAMPO LA PAROLA SCRITTA AL CONTRARIO
    console.log(reverseWord);

    return word == reverseWord
}
