// Milestone 1

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
/*const priceKm = 0.21;

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
*/

// Milestone 2
/* To Do List 
1  Aggiungere form con input nome, km, età + submit
2. prendere submit e validare i dati
3. Calcolare prezzo base (km × 0.21)
4. Applicare sconti (20% <18, 40% >65, 0% tra 18–65)
5. Stampare recap + prezzo (2 decimali) in pagina
Tools
•	getElementById()
•	addEventListener('submit', ...)
•	preventDefault()
•	Number(), if / else if / else
•	toFixed(2), textContent
*/

// Prezzo al km
const priceKm = 0.21;

// Prendo gli elementi che mi servono
const form = document.getElementById('ticketForm');
const nameEl = document.getElementById('userName');
const kmEl = document.getElementById('km');
const ageEl = document.getElementById('age');

const card = document.getElementById('ticketCard');
const outName = document.getElementById('outName');
const outType = document.getElementById('outType');
const outPrice = document.getElementById('outPrice');

// Gestisco il submit del form
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = nameEl.value();
    const km = Number(kmEl.value);
    const age = Number(ageEl.value);
    // Calcolo prezzo e tipo biglietto
    let price = km * priceKm;
    let type = '';
    if (age < 18) {
        price *= 0.8;
        type = 'Sconto Under 18';
    } else if (age > 65) {
        price *= 0.6;
        type = 'Sconto Over 65';
    }else {
        type = 'Prezzo Standard';
    }
});
// Output nella card
