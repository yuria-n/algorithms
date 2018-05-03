const btn = document.getElementById('btn');
let count = 0;

btn.addEventListener('click', () => (btn.innerHTML = ++count < 5 ? count : 9));
