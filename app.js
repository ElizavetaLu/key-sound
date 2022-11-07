const sounds = [
    { src: './sounds/1.mp3', img: './images/1.png' },
    { src: './sounds/2.mp3', img: './images/3.png' },
    { src: './sounds/3.mp3', img: './images/2.png' },
    { src: './sounds/4.mp3', img: './images/5.png' },
    { src: './sounds/5.mp3', img: './images/5.png' },
    { src: './sounds/6.wav', img: './images/6.png' },
    { src: './sounds/7.wav', img: './images/8.png' },
    { src: './sounds/8.wav', img: './images/7.png' },
    { src: './sounds/9.wav', img: './images/1.png' },
    { src: './sounds/10.wav', img: './images/2.png' },
    { src: './sounds/11.wav', img: './images/3.png' },
    { src: './sounds/12.wav', img: './images/2.png' },
    { src: './sounds/13.wav', img: './images/5.png' },
    { src: './sounds/14.mp3', img: './images/6.png' },
    { src: './sounds/15.mp3', img: './images/7.png' }
]

const pressedKey = document.getElementById('pressedKey')
const audio = document.getElementById('audio')
const img = document.getElementById('img')

let indx = Math.floor(Math.random() * sounds.length)
let key

window.addEventListener('keydown', event => {
    if (key === event.key) {
        audio.setAttribute('src', sounds[indx].src)
        img.setAttribute('src', sounds[indx].img)
       return  audio.play()
    }
    indx = Math.floor(Math.random() * sounds.length)
    key = event.key
    audio.setAttribute('src', sounds[indx].src)
    img.setAttribute('src', sounds[indx].img)
    img.style.animation = 'img 5s infinite';
    pressedKey.innerText = event.key.toUpperCase()
    audio.play()
});
