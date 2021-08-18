const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Для вывода информации в консоль')
});

const alertFunc = document.querySelector('#alertFunc');

alertFunc.addEventListener('click', () => {
    alert('Для отображения сообщения пользователю')
});

const promtFunc = document.querySelector('#promtFunc');

promptFunc.addEventListener('click', () => {
    prompt('Для ввода информации пользователем')
});



