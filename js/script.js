// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

//DICHIARAZIONE
//chiedere numero km che vuole percorrere
let kmTravel = parseInt( prompt( 'Quanti chilometri vuoi percorrere?' ) );
//chiedere età passeggero
let ageUser = parseInt( prompt( 'Qual\'è la tua età?' ) );

// //LOGICA
// //costo biglietto
// let costTicket = kmTravel * 0.21;
// //prezzo minorenni e prezzo over 65 
// let ticketUnderage = parseInt('');
// let ticketOver65 = parseInt('');
// //calcolo sconti
// if( ageUser < 18 ) {
//     ticketUnderage = ( costTicket * 20 ) / 100;
//     costTicket = ( costTicket - ticketUnderage );
// }else if( ageUser >= 65 ) {
//     ticketOver65 = ( costTicket * 40 ) / 100;
//     costTicket = ( costTicket - ticketOver65 );
// }

// let costTicketForUser = costTicket.toFixed(2);

// //OUTPUT
// document.getElementById('user_message').innerHTML = `Il costo del biglietto è ${costTicketForUser}`;

//LOGICA
//costo biglietto
let costTicket = kmTravel * 0.21;

if ( ageUser < 18 ) {
    costTicket = costTicket - (costTicket * 0.2)
} else if ( ageUser >= 65 ) {
    costTicket = costTicket - (costTicket * 0.4)
}

costTicket = costTicket.toFixed(2);

//OUTPUT
document.getElementById('user_message').innerHTML = `Il costo del biglietto è ${costTicket}`;



