import { appendHome } from './homepage';
import { appendMenu } from './menu';
import { appendContact } from './contact';

content.appendChild(appendHome());

 

(function updateDisplay() {

const content = document.getElementById('content');
const homeBtnElement = document.getElementById('home');
const menuBtnElement = document.getElementById('menu');
const contactElement = document.getElementById('contact');


function switchToHome() {
    reset();
    content.appendChild(appendHome());
}


function switchToMenu() {
    reset();
    content.appendChild(appendMenu());
}

function switchToContact() {
    reset();
    content.appendChild(appendContact());
}


function reset() {
    content.innerHTML = '';
}


homeBtnElement.addEventListener('click', switchToHome);
menuBtnElement.addEventListener('click', switchToMenu);
contactElement.addEventListener('click', switchToContact);

})();
