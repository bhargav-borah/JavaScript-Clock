setInterval(setClock, 1000) //Calling the setClock function every 1000ms, that is, every second

const hourHand = document.querySelector('.clock .hand.hour')
const minuteHand = document.querySelector('.clock .hand.minute')
const secondHand = document.querySelector('.clock .hand.second')


function setClock() {
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12
    setRotation(hourHand, hourRatio)
    setRotation(minuteHand, minuteRatio)
    setRotation(secondHand, secondRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
    console.log(`Did it inside {element}`)
}

setClock()