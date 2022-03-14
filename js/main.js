let decr = document.getElementById('decr');
let incr = document.getElementById('incr');
let reset = document.getElementById('reset');

let num = document.getElementById('number');
let int = 0;

function decrementNum() {
    int--;
    num.innerHTML = int;
}

function incrementNum() {
    int++;
    num.innerHTML = int;
}

function timerReset() {
    int = 0;
    num.innerHTML = int;
}

//change number by scrolling wheel
function wheelFunc(event) {
    if (event.deltaY < 0) {
        incrementNum();
    }
    else if (event.deltaY > 0){
        decrementNum();
    }
}

decr.addEventListener('click', decrementNum);
incr.addEventListener('click', incrementNum);
reset.addEventListener('click', timerReset);
number.addEventListener('wheel', wheelFunc);