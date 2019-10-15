let element3 = document.querySelector("#element-3");
let element4 = document.querySelector("#element-4");
let element5 = document.querySelector("#element-5");
let element6 = document.querySelector("#element-6");
let element13 = document.querySelector("#element-13");
let element14 = document.querySelector("#element-14");

let element25 = document.querySelector("#element-25");

element3.addEventListener("click", function () {
    element3.animate(
        [
            {
                opacity: 0,
                marginLeft: getComputedStyle(this).marginLeft,
                fontSize: "100px",
                borderWidth: getComputedStyle(this).borderWidth
            },
            {
                opacity: 0.4,
                marginLeft: "125px",
                fontSize: "24px",
                borderWidth: "10px"
            }
        ],
        {
            duration: 200,
            iterations: 1,
            fill: "forwards"
        }
    );
});

element6.addEventListener("pointermove", function (e) {
    var xPos = e.pageX - 125;
    var yPos = e.pageY - 125;

    this.style.position = "absolute";
    this.style.top = yPos + "px";
    this.style.left = xPos + "px";
});

element4.addEventListener("click", function () {
    this.classList.add("gradient-background");
});

element5.addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("circle");
});


element13.addEventListener('click', function () {
    this.classList.add('shake')
})

element14.addEventListener('click', function () {
    this.classList.add('move')
})

let element24 = document.querySelector('#element-24')
element24.addEventListener('click', function () {
    element24.classList.toggle('flips')


    setTimeout(function () {
        element24.classList.remove('flips')
    }, 900)

})

element25.addEventListener('click', function () {
    this.classList.toggle('cat')
})

let element26 = document.querySelector('#element-26')



element26.addEventListener('mouseenter', function () {
    element26.classList.add('beenHovered')


    setTimeout(function () {
        element26.classList.remove('beenHovered')
    }, 700)

})



let element27 = document.querySelector('#element-27')

element27.addEventListener('mouseenter', function () {
    element27.classList.add('beenclick')


    setTimeout(function () {
        element27.classList.remove('beenclick')
    }, 700)

})

let element28 = document.querySelector('#element-28')

element28.addEventListener('click', function () {
    element28.classList.add('roll-in-left')


    setTimeout(function () {
        element28.classList.remove('roll-in-left')
    }, 700)

})

let element29 = document.querySelector('#element-29')

element29.addEventListener('click', function () {
    element29.classList.add('roll-in-top')


    setTimeout(function () {
        element29.classList.remove('roll-in-top')
    }, 700)

})

let element30 = document.querySelector('#element-30')
element30.addEventListener('mouseenter', function () {
    element30.classList.add('vibrate-1')
})

let element31 = document.querySelector('#element-31')
element31.addEventListener('click', function () {
    this.classList.toggle('vibrate-2')
})

let element32 = document.querySelector('#element-32')
element32.addEventListener('click', function () {
    this.classList.toggle('vibrate-3')
})

let element33 = document.querySelector('#element-33')

element33.addEventListener('click', function () {
    element33.classList.add('roll-in-left-cat')


    setTimeout(function () {
        element33.classList.remove('roll-in-left-cat')
    }, 700)

})



let element35 = document.querySelector('#element-35')

element35.addEventListener('click', function () {
    element35.classList.add('jello-horizontal')


    setTimeout(function () {
        element35.classList.remove('jello-horizontal')
    }, 700)

})

let element36 = document.querySelector('#element-36')
element36.addEventListener('click', function () {
    this.classList.toggle('jello-diagonal-1')
})

let element37 = document.querySelector('#element-37')
element37.addEventListener('click', function () {
    this.classList.toggle('bg-pan-left')
})

let element38 = document.querySelector('#element-38')
element38.addEventListener('mouseenter', function () {
    element38.classList.toggle('shadow-inset-center')
})

let element39 = document.querySelector('#element-39')

element39.addEventListener('click', function () {
    element39.classList.add('slide-rotate-ver-l-bck')


    setTimeout(function () {
        element39.classList.remove('slide-rotate-ver-l-bck')
    }, 700)

})

let element40 = document.querySelector('#element-40')
element40.addEventListener('click', function () {
    this.classList.toggle('swing-top-left-fwd')
})

let element41 = document.querySelector('#element-41')
element41.addEventListener('click', function () {
    this.classList.toggle('roll-out-blurred-left')
})

let element42 = document.querySelector('#element-42')
element42.addEventListener('mouseenter', function () {
    element42.classList.toggle('fade-out-bck')
})

let element43 = document.querySelector('#element-43')
element43.addEventListener('click', function () {
    this.classList.toggle('scale-out-left')
})

let element44 = document.querySelector('#element-44')
element44.addEventListener('mouseenter', function () {
    element44.classList.toggle('slit-out-diagonal-2')
})

let element45 = document.querySelector('#element-45')
element45.addEventListener('click', function () {
    element45.classList.toggle('slit-out-diagonal-3')
})

let element46 = document.querySelector('#element-46')
element46.addEventListener('click', function () {
    element46.classList.toggle('slide-out-fwd-center')
})

let element47 = document.querySelector('#element-47')
element47.addEventListener('mouseenter', function () {
    element47.classList.toggle('wobble-hor-bottom')
})

let element48 = document.querySelector('#element-48')
element48.addEventListener('click', function () {
    element48.classList.toggle('bounce-top')
})

let element49 = document.querySelector('#element-49')
element49.addEventListener('click', function () {
    element49.classList.toggle('pulsate-fwd')
})

let element50 = document.querySelector('#element-50')
element50.addEventListener('mouseenter', function () {
    element50.classList.toggle('heartbeat')
})

let element52 = document.querySelector('#element-52')
element52.addEventListener('click', function () {
    element52.classList.toggle('kenburns-top')
})

let element53 = document.querySelector('#element-53')
element53.addEventListener('mouseenter', function () {
    element53.classList.toggle('color-change-4x')
})

let element54 = document.querySelector('#element-54')
element54.addEventListener('click', function () {
    element54.classList.add('slide-out-blurred-tl')
})

let element55 = document.querySelector('#element-55')
element55.addEventListener('click', function () {
    element55.classList.add('slide-out-blurred-tl-cat')
})

let element56 = document.querySelector('#element-56')
element56.addEventListener('click', function () {
    element56.classList.add('slide-out-blurred-bottom')
})

