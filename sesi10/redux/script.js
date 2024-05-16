import { store } from './redux';

const main = document.getElementById('main');

const h1 = document.createElement('h1');
h1.innerHTML = store.getState().count;
console.log(h1);

main.appendChild(h1);
