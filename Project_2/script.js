let catOne = document.querySelector('#cat_1')

let catTwo = document.querySelector('#cat_2')

let cursor = document.querySelector('.cursor')

let hasClickedOncatOne = false

let hasGrabbedHammer = false

document.addEventListener('mousemove', function (event) {

    if (!hasGrabbedHammer) {
        cursor.style.left = event.pageX + 'px'
        cursor.style.top = event.pageY + 'px'
    }

    if (hasClickedOncatOne) {
        catOne.style.left = event.pageX + 'px'
        catOne.style.top = event.pageY + 'px'
    }
})

// if (!hasGrabbedHammer) {
//     cursor.style.left = event.pageX + 'px'
//     cursor.style.top = event.pageY + 'px'
// }
catOne.addEventListener('click', function () {
    hasClickedOncatOne = true
})

catTwo.addEventListener('click', function () {
    hasGrabbedHammer = !hasGrabbedHammer
    if (hasGrabbedHammer) {
        catTwo.style.animationPlayState = 'paused'
    } else {
        catTwo.style.animationPlayState = 'running'
    }

})

let cat_3 = document.querySelector('#cat_3')
cat_3.addEventListener('click', function () {
    this.classList.toggle('zoom')
})

let cat_4 = document.querySelector('#cat_4')
cat_4.addEventListener('click', function () {
    this.classList.toggle('shake')
})

let cat_5 = document.querySelector('#cat_5')
cat_5.addEventListener('click', function () {
    this.classList.toggle('rotate')
})

let cat_6 = document.querySelector('#cat_6')
cat_6.addEventListener('click', function () {
    this.classList.toggle('rotate_1')
})

let cat_7 = document.querySelector('#cat_7')
cat_7.addEventListener('click', function () {
    this.classList.toggle('rotate_2')
})

let cat_9 = document.querySelector('#cat_9')
cat_9.addEventListener('click', function () {
    this.classList.toggle('rotate_3')
})