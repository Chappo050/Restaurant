import './style.css';
import {addBanner, pageSetup, nav} from './pageLoad.js';
import {loadHome} from './loadHome.js';


function component(){

    const element = document.createElement('div')
    element.id = "content";

    addBanner(element);
    pageSetup(element);
    nav(element);
    return element;
}

document.body.appendChild(component());