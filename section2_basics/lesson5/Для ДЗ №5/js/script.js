let menu = document.querySelector('.menu');
let menuItem = document.querySelectorAll('.menu-item');
let divTitle = document.querySelector('.title');
let divAdv = document.querySelector('.adv');
let divPrompt = document.querySelector('.prompt');


let answer = prompt('Как вы относитесь к технике Apple?', '');
divPrompt.textContent = answer;

let body = document.querySelector('body');
body.style.background = 'url(./img/apple_true.jpg)';

divTitle.textContent = 'Мы продаём только подлинную технику Apple';
divAdv.remove();

let li5 = document.createElement('li');
li5.textContent = 'Пятый пункт';
li5.classList = 'menu-item';
menu.appendChild(li5);

menu.insertBefore(menuItem[2], menuItem[1]);



