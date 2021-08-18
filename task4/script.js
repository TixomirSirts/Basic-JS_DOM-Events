const link = document.querySelector('#link');

link.addEventListener('click', (event) => {
    let linkText = link.textContent;
    linkText = prompt('Введите новый текст для ссылки');
    linkText === '' || linkText === null ? linkText = 'Измените текст ссылки' : link.textContent = linkText;
    event.preventDefault();
})