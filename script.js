let images = ['about-pets.png', 'start-screen-puppy.png', 'start-screen-gradient-background.png']
let slider = document.querySelector('#slider')

let indicators = ''

let indicatorList = document.querySelectorAll('#indicatorList')


for (let i = 0; i < images.length; i++) {
    let indicator = document.createElement(li)
    indicatorList = document.appendChild(indicator)
    indicators = indicator
}

let i = 0;
slider.src = `img/${images[0]}`
indicators[0].style.borderClor = 'red'
let left = document.querySelector('#left')
let right = document.querySelector('#right')

left.addEventListener('click', () => {
    e.preventDefault()

    function prev(indicators) {
        let i = -1;
        if (i < 0) {
            i = images.length - 1
        }
        slider.src = `img/${images[i]}`
        for (let i = 0; i < images.length; i++) {
            indicators[i].style.borderClor = 'transparent'
        }
        indicators[i].style.borderClor = 'red'
    }
    prev(indicators)
    right.addEventListener('click', () => {
        e.preventDefault()
        function next(indicators) {

            if (i > images.length - 1) {
                i = 0
            }
            slider.src = `img/${images[i]}`
            for (let i = 0; i < images.length; i++) {
                indicators[i].style.borderClor = 'red'
            }
            indicators[i].style.borderClor = 'red'
        }
        next(indicators)
    })
})