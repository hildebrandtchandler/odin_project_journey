/*
// Foundations DOM manipulation and events exercise

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
*/

/*
// Foundations: DOM manipulation and events: Events: Method 2
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");
*/

/*
//Foundations: DOM manipulation and events: Events: Method 3
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    alert("Hello World");
});
*/

/*
//Foundations: DOM manipulation and events: Events: named functions
function alertFunction() {
    alert('YAY! YOU DID IT!');
}

const btn = document.querySelector('#btn');
/*
//Method 2
btn.onclick = alertFunction;
*/

/*
//Method 3
btn.addEventListener('click', alertFunction);
*/

//Passing a parameter
/*
btn.addEventListener('click', function (e) {
    console.log(e);
});
*/

/*
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});
*/

/*
//Foundations: DOM manipulation and events: Events: Attaching listeners to groups of nodes
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});
*/