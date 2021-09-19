import food1 from './food1.jpg';
import food2 from './food2.jpg';
import food3 from './food3.jpg';
import food4 from './food4.jpg';

function loadMenu(){
    const imgs = [food1, food2, food3, food4];
    const texts= [`Freash Takoyaki that has only been half eaten! \<br>$2.00 \<br>\<br>`, 
    'Lots of random mushrooms I found in the forest!\<br> $5.00\<br>\<br>', 
    'Speacial handmade cookies. Choco and vanilla! YUM YUM!\<br> $3.50\<br>\<br>', 
    'My favourite menu item!! THE AMAZING WATERMELON!\<br> $12.75\<br>\<br>'];
    const main = document.getElementById('main');
    main.innerHTML = `Please choose any of out amazing menu items!! \<br> Hand made/picked daily! \<br>\<br>\<br>`;


    for (let i = 0; i < imgs.length; i++) {
        const element = imgs[i];
        const img = new Image(200, 350);
        img.src = element;

        const imgText = document.createElement('p');
        imgText.innerHTML = texts[i];

        main.appendChild(img);
        main.appendChild(imgText);
        console.log("appended");
    }
}

export {loadMenu}