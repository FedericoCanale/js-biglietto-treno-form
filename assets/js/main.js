/* To Do List
    1. 	Creare due file: index.html e main.js.
	2.	Creare in HTML due input e un bottone.
	4.	In JS recuperare i valori e calcolare il prezzo base (km × 0.21).
	5.	Applicare:
        •	sconto 20% se eta < 18
        •	sconto 40% se eta > 65
        •	nessuno sconto se eta è tra 18 e 65
	6.	Stampare il risultato in console.
    Tools
    •	getElementById()
	•	addEventListener()
	•	Number()
	•	if / else if / else
	•	console.log()
	•	.toFixed(2)
    */

// Prezzo per km
const priceKm = 0.21;

// Prendo il bottone
const btn = document.getElementById('countBtn');
// Aggiungo evento click
btn.addEventListener('click', function() {
    // Recupero i valori dagli input
    const km = Number(document.getElementById('km').value);
    const age = Number(document.getElementById('age').value);
 
    // Calcolo prezzo base
  let priceTotal = km * priceKm;


    // Applico eventuali sconti
  if (age < 18) {
    priceTotal *= 0.8; // sconto 20%
    console.log("Applicato sconto del 20% per minorenni.");
  } else if (age > 65) {
    priceTotal *= 0.6; // sconto 40%
    console.log("Applicato sconto del 40% per over 65.");
  } else {
    console.log("Nessuno sconto applicato (fascia 18-65 anni).");
  }

// Mostro il risultato finale in console
  console.log(`Il prezzo totale del biglietto è: €${priceTotal.toFixed(2)}`);
});