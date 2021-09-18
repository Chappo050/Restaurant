import banner from './Banner.jpg';

function addBanner(element){
    const div = document.createElement('div')
    div.id ="banner";

    const newBanner = new Image();
    newBanner.src = banner;

    div.appendChild(newBanner);
    element.appendChild(div);
}

function nav(element){
    const div = document.createElement('div')
    div.id ="nav";

    const contact = document.createElement('div')
    contact.id = 'contact';
    
    const menu = document.createElement('div')
    menu.id = 'menu';


    div.appendChild(contact);
    div.appendChild(menu);
    element.appendChild(div);
}
function introduction(){
    return `
    Welcome to my cafe! My name is Patch!
    \<br>
    \<br>
    Everything in my cafe is home grown and hand picked.
    \<br>
    \<br>
    All of my food is made to be healthy, yet tasty!
    \<br>
    \<br>
    Please check out all of our amazing fresh food on our menu!
    `
}


function intro(element){
    const div = document.createElement('div')
    div.id ="main";

    const intro = document.createElement('p')

    intro.innerHTML = introduction();

    div.appendChild(intro);
    element.appendChild(div);
}

export {addBanner, intro, nav}

