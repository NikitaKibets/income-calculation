let box = document.getElementById('box'),
  button = document.getElementsByTagName('button'),
  circle = document.getElementsByClassName('circle'),
  heart = document.querySelectorAll('.heart'),
  wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
button[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for (let i = 0; i < heart.length; i++) {
//   heart[i].style.backgroundColor = 'lime';
// }

// heart.forEach((elem) => {
//   elem.style.backgroundColor = 'black';
// });

let div = document.createElement('div');
let text = document.createTextNode('blablacar');

div.classList.add('black');

// document.body.appendChild(div);
// wrapper.appendChild(div);

// div.innerHTML = '<h1>Hello!</h1>';
div.textContent = 'Hello world';

document.body.insertBefore(div, circle[0]); // вставить перед ... 
// document.body.removeChild(circle[1]); // удалить
// console.log(div);
wrapper.removeChild(heart[0]);

document.body.replaceChild(button[0], circle[1]);
