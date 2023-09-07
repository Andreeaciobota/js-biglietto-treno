console.log('Java script treno')
/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.*/
const kilometresTravel = parseInt(prompt('Quanti chilometri ti piacerebbe percorrere ?'));
const ageTraveler = parseInt(prompt('Indica la tua età!'));



console.log(kilometresTravel);
console.log(ageTraveler);

// Impostazione del calolo 
let finalPrice = (kilometresTravel * 21) / 100;
console.log(finalPrice);

let finalPriceTeen = ''; 
let finalPriceElderly = ''; 

const twentyDiscount = parseInt(20);
const fortyDiscount = parseInt(40);

const resultParagraph = document.getElementById('result');



if (isNaN(kilometresTravel) || isNaN(ageTraveler)) {
  alert ('Il carattere inserito non è valido.')

} else {
  if (ageTraveler <= 18) {
    finalPriceTeen = finalPrice - ((twentyDiscount / 100) * finalPrice);

    resultParagraph.innerHTML = `Hai ricevuto il 20% di sconto! Il prezzo del biglietto non è più <del> ${finalPrice}€ </del>, pagherai soltanto ${finalPriceTeen}€.`;

} else if (ageTraveler >= 65) {
    finalPriceElderly = finalPrice - ((fortyDiscount / 100) * finalPrice);
    
    resultParagraph.innerHTML = `Hai ricevuto il 40% di sconto! Il prezzo del biglietto non è più <del> ${finalPrice}€ </del>, pagherai soltanto ${finalPriceElderly}€.`;
    
} else {
    resultParagraph.innerText = `Il prezzo a te dedicato è:  ${finalPrice}€.`;
}
}