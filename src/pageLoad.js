import banner from './Banner.jpg';
import {loadMenu} from './loadMenu.js';
import {loadContact} from './loadContact.js';
import {loadHome, introduction} from './loadHome.js';

function addBanner(element){
    const div = document.createElement('div')
    div.id ="banner";

    const newBanner = new Image();
    newBanner.src = banner;

    div.appendChild(newBanner);
    element.appendChild(div);
}


function pageSetup (element){
    const div = document.createElement('div')
    div.id ="main";
    div.innerHTML = introduction();
    element.appendChild(div);
}


function nav(element){
    const div = document.createElement('div')
    div.id ="nav";

    const home = document.createElement('a');
    home.id = "home";
    home.innerHTML="Home";
    home.addEventListener('click', loadHome);

    const menu = document.createElement('a');
    menu.id = "menu";
    menu.innerHTML="Menu";
    menu.addEventListener('click', loadMenu);

    const contact = document.createElement('a');
    contact.id = "contact";
    contact.innerHTML="Contact";
    contact.addEventListener('click', loadContact);


    div.appendChild(home);
    div.appendChild(menu);
    div.appendChild(contact);
    element.appendChild(div);
}


export {addBanner, pageSetup, nav}

