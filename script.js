
const botonHamburguesa = document.querySelector(".ham");
const nav = document.querySelector(".nav");
const html = document.querySelector("#html");
const botones = document.querySelectorAll(".nav__item");

botones.forEach(boton => {
    boton.addEventListener("click",ocultarMenu);
});

console.log(botones);

botonHamburguesa.addEventListener("click",function(){
    if(botonHamburguesa.classList.contains("fa-bars")){
        mostrarMenu();
    }else{
        ocultarMenu();
    }
})


// nav.addEventListener("click",ocultarMenu);

function mostrarMenu(){
    botonHamburguesa.classList.replace("fa-bars","fa-xmark");
    nav.classList.add("nav__active");
    html.style.overflow = "hidden";
}

function ocultarMenu(){
    botonHamburguesa.classList.replace("fa-xmark","fa-bars");
    nav.classList.remove("nav__active");
    html.style.overflow = "auto";
}
function cargar(){
    body.classList.add("hidden");
}