const menu = document.getElementById('menu');
const menuContainer = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-btn');
const overlay = document.querySelector('.under-cover');


function menuFunc() {
    

    menu.addEventListener('click', () => {
        menuContainer.classList.toggle('active');
        overlay.style.display = 'block';

    });

    // closeBtn.addEventListener('click', () => {
    //    onOff();


    // });

    overlay.addEventListener('click',()=>{
      onOff();

    })


}

menuFunc();


const onOff =()=>{
     menuContainer.classList.remove('active')
        overlay.style.display = 'none'
}







