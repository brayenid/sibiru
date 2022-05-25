const menuTogel = document.querySelector('.tutup input');
const nav = document.querySelector('.menu');
const index = document.querySelector('.menu ul');

menuTogel.addEventListener('click', function(){
    nav.classList.toggle ('slide');
    index.classList.toggle ('index');
})