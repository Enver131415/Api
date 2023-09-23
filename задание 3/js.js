const btn = document.querySelector('.btn');
const btnGeo = document.querySelector('.btnGeo');
const input = document.querySelector('.input');
const chat = document.querySelector('.chat');

const url = 'wss://echo-ws-service.herokuapp.com';

const webSocet = new WebSocket(url);
webSocet.onopen = (e) => {
    writeToChat('conected')
};

function writeToChat (message) {
    let innerP = document.createElement('p');
    innerP.innerHTML = message;
    chat.appendChild(innerP)  
}
btn.addEventListener('click', () => {
    const inputValue = input.value;
    writeToChat(inputValue);
    webSocet.send(inputValue)
    webSocet.onmessage = (e) => {
        if (e.data === inputValue) {
            writeToChat('<span class = "span" style = "color: blue;">' + e.data + '<span>')
        } 
    }
})
btnGeo.addEventListener('click', () => {
    const success = (position) => {
        const latutude = position.coords.latutude;
        const longitude = position.coords.longitude
        const maP = `<a href = 'https://www.openstreetmap.org/#map=6/${latutude}/${longitude}'>Геолокация<a>`
        writeToChat(maP)
        webSocet.send(maP)
    }
    const error = () => {
        writeToChat('ERROR')
    }
    navigator.geolocation.getCurrentPosition(success, error);
})
