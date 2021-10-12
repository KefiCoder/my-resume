"use strict";

const container = document.querySelector('.main_conteiner'),
           imgs = document.querySelectorAll('.image'),
           btn  = document.querySelector('.sbbutton');
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
let i = 1;
btn.addEventListener('click', (event) =>{   
       event.preventDefault();
                        hideimg();
                        if(i == 1){
                                showimg(i);
                                i = 0;
                        }
                        else{
                                showimg(i);
                                i++;
                        }
});

