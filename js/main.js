const buttonsWrapper = document.getElementById('buttons-wrapper');
const counterDisplay = document.getElementById('counter-display')

//create buttons
const decr = document.createElement('button');
const reset = document.createElement('button');
reset.id = ('reset');
const incr = document.createElement('button');
buttonsWrapper.append(decr, reset, incr);

decr.innerHTML = '-';
reset.innerHTML = 'RESET';
incr.innerHTML = '+';

//create number and set his value to 0
const number = document.createElement('div');
let int = 0;
number.innerHTML = (int);
counterDisplay.appendChild(number);

function decrementNum() {
    number.innerHTML = (int -= 1);
}

function incrementNum() {
    number.innerHTML = (int += 1);
}

function timerReset() {
    int = 0;
    number.innerHTML = int;
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