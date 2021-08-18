const consoleLog = document.querySelector('#consoleLog');
const alertFunc = document.querySelector('#alertFunc');
const promtFunc = document.querySelector('#promtFunc');

consoleLog.addEventListener('click', () => {
    alert('Для вывода информации в консоль')
});

alertFunc.addEventListener('click', () => {
    alert('Для отображения сообщения пользователю')
});

promptFunc.addEventListener('click', () => {
    alert('Для ввода информации пользователем')
});



