function loadHome(){
   
    const main = document.getElementById('main');
    main.innerHTML = introduction();

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

export {loadHome, introduction}