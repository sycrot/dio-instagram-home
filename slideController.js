const backFacePhone = document.querySelector('.image-slide')

let currentSlide = 0


const images = [
    {
        id: 1,
        src: "./img/phone.png"
    },
    {
        id: 2,
        src: "./img/phone2.png"
    },
    {
        id: 3,
        src: "./img/phone3.png"
    },
    {
        id: 4,
        src: "./img/phone4.png"
    },
]


images.map((item, index) => (
    backFacePhone.innerHTML += `
        <img class="backfacephone" src="${item.src}"/>
    `
))

const slideContentItems = document.querySelectorAll('.backfacephone')
init()

const intervalSlide = setInterval(() => {
    showNextSlide()
}, 2000)

function init() {
    var _show = backFacePhone.querySelectorAll('.showimage')

    Array.prototype.forEach.call(_show, item => {
        item.classList.remove('showimage')
    })

    slideContentItems[0].classList.add('showimage')
}

function showNextSlide() {
    if (currentSlide == 4) {
        currentSlide = 0
    }
    currentSlide++
    showSlide()
}

function showSlide() {
    let quantity = slideContentItems.length
    let slide = currentSlide % quantity

    slide = Math.abs(slide)

    document.querySelector('.showimage').classList.remove('.showimage')
    slideContentItems[slide].classList.add('showimage')
}