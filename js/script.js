
// Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

// Chiedo all'utente la sua eta e Km

const generateButton = document.getElementById('generate-ticket');
generateButton.addEventListener('clik',
function() {
    const userName = document.getElementById('user-name').value;
    const userKm = parseInt( document.getElementById('user-km').value);
    const userAge = document.getElementById('user-age').value;

    // Calcolo il prezzo totale del viaggio
    const price = userKm * 0.21;

    let reduction = 0;

    if (userAge === 'minorenne') {
        reduction = price * 20 / 100;
     } else if (userAge === 'over') {
         reduction = price * 40 / 100;
     }
    const finalPrice = price - reduction;

    document.getElementById('ticket-name').innerHTML = UserName;
    document.getElementById('ticket-price').innerHTML = finalPrice.toFixed(2);
    document.getElementById('ticket').classList.add('active');

}
);
 const cancelTicket = document.getElementById('cancel-ticket');
 cancelTicket.addEventListener('clik ,
 function() {
     document.getElementById('user-name').value = '';
 }
 );