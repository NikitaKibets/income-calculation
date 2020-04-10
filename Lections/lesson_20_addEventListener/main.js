let buttons = document.querySelectorAll('button'),
  wrap = document.querySelector('.wrapper'),
  a = document.querySelector('a');


buttons[0].addEventListener('click', function (event) {
  // console.log(event);
  console.log('1 произошло событие: ' + event.type + ' на элементе: ' + event.target);
  // let target = event.target;
  // target.style.display = 'none';
});

wrap.addEventListener('click', function (event) {
  console.log('2 произошло событие: ' + event.type + ' на элементе: ' + event.target);
});

a.addEventListener('click', function (event) {
  event.preventDefault();
  console.log('3 произошло событие: ' + event.type + ' на элементе: ' + event.target);
});

// buttons.forEach(function (elem) {
// 	elem.addEventListener('mouseleave', function () {
// 		console.log('Прямое попадание');
// 	});
// });
