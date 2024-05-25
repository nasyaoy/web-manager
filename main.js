const bnt = document.querySelector('.btn');
const inputName = document.getElementById('name');
const inputPrice = document.getElementById('price');
const selectCategory = document.getElementById('selectCategory');
const purcasheList = document.getElementById('tbody');
let legendList = document.querySelectorAll('.legend__item');
let unitsList = document.querySelectorAll('.unit');
let legendPrice = document.querySelectorAll('.legend__price');


bnt.addEventListener('click', (e) => {
    e.preventDefault();
    const newLine = document.createElement('tr');
    newLine.classList.add('purcashes__item');
    newLine.classList.add('purcashes__row');

    const newName = document.createElement('td');
    const newCategory = document.createElement('td');
    const newPrice = document.createElement('td');
    newName.classList.add('purcashes__td');
    newCategory.classList.add('purcashes__td');
    newPrice.classList.add('purcashes__td');

    newLine.appendChild(newName);
    newLine.appendChild(newCategory);
    newLine.appendChild(newPrice);
    purcasheList.appendChild(newLine);

    newName.textContent = inputName.value;
    inputName.value = ' ';

    newCategory.textContent = selectCategory.value;
    newCategory.value = ' ';

    newPrice.textContent = inputPrice.value;
    inputPrice.value = ' ';

    const delBtn = document.createElement('button');
    delBtn.textContent = '✖️';
    delBtn.classList.add('delBtn');
    newLine.appendChild(delBtn);

    delBtn.addEventListener('click', () => {
        purcasheList.removeChild(newLine);
    });

    //  диаграмма
    
})




 