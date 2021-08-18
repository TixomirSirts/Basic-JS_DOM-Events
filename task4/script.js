const link = document.querySelector('#link');
link.addEventListener('click', linkTextChange);

function linkTextChange(event) {
    let linkText = link.textContent;
    linkText = prompt('Введите новый текст для ссылки');
    linkText === '' || linkText === null ? linkText = 'Измените текст ссылки' : link.textContent = linkText;
    event.preventDefault();
    link.removeEventListener('click', linkTextChange);
}