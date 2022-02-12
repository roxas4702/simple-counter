let decr = document.getElementById('decr');
let incr = document.getElementById('incr');

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

decr.addEventListener('click', decrement);
incr.addEventListener('click', increment);