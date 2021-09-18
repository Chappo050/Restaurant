import './style.css';
import {addBanner, intro, nav} from './pageLoad.js';


function component(){

    const element = document.createElement('div')
    element.id = "content";

    addBanner(element);
    intro(element);
    nav(element);

    return element;
}

document.body.appendChild(component());