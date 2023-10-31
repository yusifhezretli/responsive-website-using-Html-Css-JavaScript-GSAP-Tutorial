gsap.from('.img-2', 1.2, {opacity:0, y:250, delay: 0.8})
gsap.from('.img-3', 1.2, {opacity:0, y:250, delay: 0.5})
gsap.from('h1', 1.2, {opacity:0, x:-100, delay: 1.5})
gsap.from('button', 1.2, {opacity:0, y:250, delay: 1})
gsap.from('p', 1.2, {opacity:0, x:180, delay: 1.26})

let menu = document.querySelector('.menu');
let toggle = document.getElementById('toggle');
toggle.onclick = function(){
    menu.classList.toggle('active');
}