
let c_30 = document.querySelector('#c_30')

c_30.onclick = function () {
    c_30.classList.toggle('active')
}

let c = document.querySelector('#c')

c.onclick = function () {
    c.classList.toggle('active')
}

let circles = document.querySelectorAll('.circle')

for (let counter = 0; counter < circles.length; counter++) {

    if (counter == circles.length - 1) {
        circles[counter].addEventListener('mousedown', function () {
            if (circles[counter].parentNode.classList.contains('mask')) {
                circles[counter].parentNode.classList.toggle('active')
            }
        })
    } else {
        circles[counter].addEventListener('mousedown', function () {
            if (circles[counter].parentNode.classList.contains('mask')) {
                circles[counter].parentNode.classList.add('active')
            }
        })
        circles[counter].addEventListener('mouseup', function () {
            if (circles[counter].parentNode.classList.contains('mask')) {
                circles[counter].parentNode.classList.remove('active')
            }
        })
    }

}

