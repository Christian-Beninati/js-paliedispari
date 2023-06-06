// console.log('JS OK')

// Recupero gli elementi dal DOM
const wordInput = document.getElementById("word");
const resultElement = document.getElementById("result");
const verifyButton = document.getElementById("verifyButton");

// Creo una funzione per verificare se la parola è palindroma
function isPalindrome(word) {
    const reversedWord = word.split("").reverse().join("");
    return word === reversedWord;
}

// Creo una funzione per eseguire la verifica della parola inserita
function checkPalindrome() {
   const word = wordInput.value.trim();

    // Verifico se l'utente ha scritto qualcosa
    if (word === "") {
        resultElement.innerText = "Nessuna parola inserita.";
        // Esco dalla funzione 
        return; 
    }

    // Verifico se la parola inserita è palindroma e mostro il risultato
    if (isPalindrome(word)) {
      resultElement.innerText = "La parola inserita è palindroma.";
    } else {
      resultElement.innerText = "La parola inserita non è palindroma.";
    }
  }

// Creo un Event Listener per la verifica al click del button
verifyButton.addEventListener("click", checkPalindrome);