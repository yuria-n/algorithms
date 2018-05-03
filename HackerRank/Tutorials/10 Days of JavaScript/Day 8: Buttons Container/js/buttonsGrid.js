const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');

let count = 0;

btn5.addEventListener('click', () => (++count === 1 ? getForm2() : getForm3()));

function getForm2() {
  btn1.innerHTML = '4';
  btn2.innerHTML = '1';
  btn3.innerHTML = '2';
  btn4.innerHTML = '7';
  btn6.innerHTML = '3';
  btn7.innerHTML = '8';
  btn8.innerHTML = '9';
  btn9.innerHTML = '6';
}

function getForm3() {
  btn1.innerHTML = '7';
  btn2.innerHTML = '4';
  btn3.innerHTML = '1';
  btn4.innerHTML = '8';
  btn6.innerHTML = '2';
  btn7.innerHTML = '9';
  btn8.innerHTML = '6';
  btn9.innerHTML = '3';
}
