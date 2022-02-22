let decr = document.getElementById('decr');
let incr = document.getElementById('incr');
let reset = document.getElementById('reset');

let num = document.getElementById('number');
let int = 0;

function decrement() {
    int--;
    num.innerHTML = int;
}

function increment() {
    int++;
    num.innerHTML = int;
}

function timerReset() {
    int = 0;
    num.innerHTML = int;
}

function wheelFunc(event) {
    if (event.deltaY < 0) {
        increment();
    }
    else if (event.deltaY > 0){
        decrement();
    }
}

decr.addEventListener('click', decrement);
incr.addEventListener('click', increment);
reset.addEventListener('click', timerReset);
number.addEventListener('wheel', wheelFunc);