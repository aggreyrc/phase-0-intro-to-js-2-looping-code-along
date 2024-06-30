// Code your solutions in this fil
let thankYouMessage = [];
function writeCards(guestName, event) {
    for(let i = 0; i < guestName.length; i++){
        thankYouMessage.push(`Thank you, ${guestName[i]}, for the wonderful ${event} gift!`);
    }
   return thankYouMessage;
}

function countDown(number){
    let i = number;
    while(i >=0){
        console.log(i);
        i--;
    }
}
