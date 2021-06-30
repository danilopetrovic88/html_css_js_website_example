const lines = document.querySelectorAll('.lines');

const listItem1 = document.querySelector('#item-1');
const itemParagraph1 = document.querySelector('#item__paragraph-1');
const listItem2 = document.querySelector('#item-2');
const itemParagraph2 = document.querySelector('#item__paragraph-2');
const listItem3 = document.querySelector('#item-3');
const itemParagraph3 = document.querySelector('#item__paragraph-3');
const listItem4 = document.querySelector('#item-4');
const itemParagraph4 = document.querySelector('#item__paragraph-4');
const listItem5 = document.querySelector('#item-5');
const itemParagraph5 = document.querySelector('#item__paragraph-5');
const listItem6 = document.querySelector('#item-6');
const itemParagraph6 = document.querySelector('#item__paragraph-6');

const paragraph = document.querySelectorAll('.item__paragraph');

listItem1.addEventListener('click', () => {
    listItem1.classList.toggle('open-list');

    itemParagraph1.classList.toggle('open');
});

listItem2.addEventListener('click', () => {
    listItem2.classList.toggle('open-list');

    itemParagraph2.classList.toggle('open');
});

listItem3.addEventListener('click', () => {
    listItem3.classList.toggle('open-list');

    itemParagraph3.classList.toggle('open');
});

listItem4.addEventListener('click', () => {
    listItem4.classList.toggle('open-list');

    itemParagraph4.classList.toggle('open');
});

listItem5.addEventListener('click', () => {
    listItem5.classList.toggle('open-list');

    itemParagraph5.classList.toggle('open');
});

listItem6.addEventListener('click', () => {
    listItem6.classList.toggle('open-list');

    itemParagraph6.classList.toggle('open');
});








