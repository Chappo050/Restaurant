

function loadContact(){
    const main = document.getElementById('main');
    main.innerHTML = contactInfo();
}

function contactInfo(){
    return `
    \<br>
    \<br>
    You can reach me via e-mail here:
    \<br>
    \<br>
    patcharaponkongpitak@gmail.com
    \<br>
    \<br>
    `
}

export {loadContact}