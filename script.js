const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar) {
    bar.addEventListener('click', () =>{
        nav.classList.add('active');

    } )
    
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
})
    
}

function login(event){
    localStorage.setItem('cuenta', event.target.elements.cuenta.value);
}

function checkUser(){
    let usuario = localStorage.getItem('cuenta');
    if (usuario){
        document.getElementById('login').style.display = 'none';
        document.getElementById('carrito').style.display = 'block';
        console.log(usuario);
    }
}

checkUser();