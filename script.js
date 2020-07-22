const msg1 = document.querySelector('.msg1')
const msg2 = document.querySelector('.msg2');
const img = document.querySelector('img');

const date = new Date();
const hours = date.getHours();
msg2.innerHTML = `Agora são ${hours} horas.`

if (hours >= 0 && hours < 12) {
    msg1.innerHTML = "Bom dia!"
    img.src = "image/manhã.jpg"
    document.body.style.background = '#edbb53'
} else if (hours >= 12 && hours < 18) {
    msg1.innerHTML = "Boa tarde!"
    img.src = "image/tarde.jpg"
    document.body.style.background = '#f76d02'
} else {
    msg1.innerHTML = "Boa noite!"
    img.src = "image/noite.jpg"
    document.body.style.background = '#715a82'
}
