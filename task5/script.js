let input = document.querySelector('#inputText');
let duplicateField = document.querySelector('#duplicateField');

input.oninput = function() {
    duplicateField.innerHTML = input.value;
};

let submit = document.querySelector('#submit');

submit.onclick = function(event) {
    console.log(input.value);
    document.getElementById('inputText').value = '';
    document.getElementById('duplicateField').textContent = '';
    event.preventDefault();
}

