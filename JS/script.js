"use strict";

const container = document.querySelector('.main_conteiner'),
           imgs = document.querySelectorAll('.image'),
           btn  = document.querySelector('.sbbutton'),
           imgMenu = document.querySelector('.image_tab_menu'),
           imgItems = document.querySelectorAll('.image_tab');
// container.addEventListener('click', (e) =>{
//         console.log('hey');
// });

function hideimg(){
        imgs.forEach(item => {
                item.style.display = 'none';
        });
        imgs.forEach(item => {
                item.classList.remove('image_active');
        });
}

function showimg(i = 0){
              imgs[i].style.display = 'block';
              imgs[i].classList.add('image_active');
}
hideimg();
showimg();
        imgMenu.addEventListener('click', (e)=>{
                const event = e.target;
                console.log('hi');
                if(event && event.classList.contains('image_tab'))
                {
                        console.log('auf');
                        imgItems.forEach((item, i) =>{
                                if(event == item){
                                        hideimg();
                                        showimg(i);
                                }
                        });
                }
        });
let i = 1;
btn.addEventListener('click', (event) =>{   
       event.preventDefault();
                        hideimg();
                        if(i == imgs.length - 1){
                                showimg(i);
                                i = 0;
                        }
                        else{
                                showimg(i);
                                i++;
                        }
});

