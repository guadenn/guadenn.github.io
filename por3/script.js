//funcion qe marca seleccionado
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    // desaparece del menu una vez seleccionado

    var x = document.getElementById("nav");
    x.className = "";
}



//funcion qe muestra menu responsive 
function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive"
    }else{
        x.className = "";
    }
}

//detecto el scrolling para la animacion de las barras/

window.onscroll = function() {
    efectoHabilidades()
};

//funcion qe aplica la animacion

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }
}


//formulario
const form = document.getElementById("form")
const sendMail = document.getElementById("emailA")


function handleSendEmail(event){
    event.preventDefault()
    const fd = new FormData(this)


    sendMail.setAttribute(
        'href',
        `mailTo:guadabosio@gmail.com?subject=${fd.get('tema')}&body=${fd.get('message')}`
    )


    sendMail.click()
}


form.addEventListener('submit', handleSendEmail)

// modo oscuro
const bdark = document.querySelector('#bdark');
const body = document.querySelector('body');

load(); 

let dark = false;

bdark.addEventListener('click', e =>{
    body.classList.toggle('darkmode');
    dark = !dark;
    bdark.textContent = dark ? 'Modo Oscuro' : 'Modo Claro';
    store(body.classList.contains('darkmode'));
});

function load() {
    const darkmode = localStorage.getItem('darkmode');
    
    if(!darkmode){
        store('false');

    }else if(darkmode == 'true'){
        body.classList.add('darkmode');
    }
}

function store(value) {
    localStorage.setItem('darkmode', value);
}