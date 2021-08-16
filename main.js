const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

const links = document.querySelectorAll("#header li a");

for(const element of toggle){
    element.addEventListener('click', function(){
        nav.classList.toggle('show');
    })
}


for(const link of links){
    link.addEventListener('click', function(){
        nav.classList.remove('show');
    })
}

//carousel
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination:{
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true

})