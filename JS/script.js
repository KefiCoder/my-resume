"use strict";

const container = document.querySelector('.main_conteiner'),
           imgs = document.querySelectorAll('.image'),
           btn  = document.querySelector('.sbbutton');

container.addEventListener('click', (e) =>{
        console.log('hey');
});

function hideimg(){
        imgs.forEach(item => {
                item.style.display = 'none';
        });
        imgs.forEach(item => {
                item.classList.remove('.image_active');
        });
}

function showimg(i = 0){
        imgs.forEach((item, i)=> {
                item[i].style.display = 'block';
                item[i].classList.add('.image_active');
        });
}

btn.addEventListener('click', () =>{
        imgs.forEach((item, i) =>{
                let a = 0;
                if(item.contains('.image_active')){
                        hideimg();
                        if(i == imgs.length){
                                a = 0;
                        }
                        else{
                                a = i++;
                        }
                        showimg(a);
                }
        });
});

