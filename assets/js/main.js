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

let decrementNum = () => number.innerHTML = (int -= 1); //decrement value

let incrementNum = () => number.innerHTML = (int += 1); //increment value

let timerReset = () => number.innerHTML = (int = 0); //reset value to 0

let wheelFunc = (e) => e.deltaY > 0 ? decrementNum() : incrementNum(); //change value by scrolling wheel

//change value with left/right arrows or with '-' and '+'
let keyPress = (e) => {
    if (e.keyCode === 37 || e.key === '-')
    decrementNum();
    else if (e.keyCode === 39 || e.key === '+')
    incrementNum();
}

//event listeners
decr.addEventListener('click', decrementNum);
incr.addEventListener('click', incrementNum);
reset.addEventListener('click', timerReset);
number.addEventListener('wheel', wheelFunc);
addEventListener('keyup', keyPress);