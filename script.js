const dieIcon = document.getElementById('dieIcon');
const adviceNumber = document.getElementById('adviceNumber');
const adviceText = document.getElementById('adviceText');
const url = 'https://api.adviceslip.com/advice';
let receivedNumber = 0;
let receivedText = ''

function getAdvice(){
    fetch(url,{cache:'no-cache'}).then(response => {
        if(response.ok) {
            console.log('OK!');
            return response.json();
        }
        throw new Error('Request Failed!');
    }, netErr => console.log(netErr.messge)
    ).then(jsonResponse => {
        console.log(jsonResponse.slip.advice);
        adviceNumber.innerHTML = jsonResponse.slip.id;
        adviceText.innerHTML = jsonResponse.slip.advice;
    });
}

dieIcon.addEventListener('click', getAdvice);
