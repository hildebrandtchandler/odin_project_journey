// Foundations DOM manipulation and events
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.classList.add('paragraph');
paragraph.textContent = 'Hey I\'m red!';
paragraph.style.color = 'red';
container.appendChild(paragraph);

const header3 = document.createElement('h3');
header3.classList.add('header3');
header3.textContent = 'I\'m a blue h3!';
header3.style.color = 'blue';
container.appendChild(header3);

const secondDiv = document.createElement('div');
secondDiv.classList.add('secondDiv');
secondDiv.style.border = '5px solid black';
secondDiv.style.backgroundColor = 'pink';

const secondh1 = document.createElement('h1');
secondh1.classList.add('secondh1');
secondh1.textContent = 'I\'m in a div';
secondDiv.appendChild(secondh1);

const secondParagraph = document.createElement('p');
secondParagraph.classList.add('secondParagraph');
secondParagraph.textContent = 'ME TOO!';
secondDiv.appendChild(secondParagraph);

container.appendChild(secondDiv);