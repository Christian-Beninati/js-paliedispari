// Recupero gli elementi dal DOM
const choiceElement = document.getElementById("choice");
const numberElement = document.getElementById("number");
const playButton = document.getElementById("playButton");
const playResultElement = document.getElementById("play-result");



// Creo una Funzione per generare un numero casuale tra 1 e 5 per il computer
function getRandomNumber() {
const randomNumber = Math.floor(Math.random() * 5) + 1;
return randomNumber;
}

// Creo una Funzione per verificare se la somma dei numeri è pari o dispari
function checkIfSumIsEven(num) {
  const  isSumEven = num % 2 === 0;
  return isSumEven;
}

// Creo un Event listener per il click del button "Gioca"
playButton.addEventListener("click", function() {
    const choice = choiceElement.value;
    const number = parseInt(numberElement.value);
  
    // Verifio se il numero inserito dall'utente è valido
    if (isNaN(number) || number < 1 || number > 5) {
        playResultElement.innerText = "Inserisci un numero valido da 1 a 5.";
        return;
    }
   
    // Genero un numero casuale per il computer
    const computerNumber = getRandomNumber();

    // Calcolo la somma dei due numeri
    const sum = number + computerNumber;

    // Verifico se la somma è pari o dispari
    const isResultEven = checkIfSumIsEven(sum);
    
    // Determino il risultato in base alla scelta dell'utente
    const result = isResultEven ? "pari" : "dispari";

    // Creo il messaggio da visualizzare
    let message = `Hai scelto ${choice}. Il numero scelto è ${number}. Il computer ha scelto ${computerNumber}. La somma dei numeri è ${sum}. Risultato: ${result}. `;

    // Determino se l'utente ha vinto o perso
    if (choice === result) {
        message += "Hai vinto!";
    } else {
        message += "Hai perso!";
    }

    // inserisco il risultato nell'elemento del DOM (recuperatto precedentemente)
    playResultElement.innerText = message;
});