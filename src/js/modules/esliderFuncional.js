
let imgSlider = document.querySelectorAll('.slider-container .slider-img');
let btnPox = document.querySelector('#proximo')
let btnAnter = document.querySelector('#anterior')
let btnNav = document.querySelectorAll('.btn-nav-img .btn-nav')

let contadorImg = imgSlider.length
let imgAtiva = 0;

btnPox.addEventListener('click', ()=>{
    imgAtiva++
    if(imgAtiva >= contadorImg){
        imgAtiva = 0;
    }
    mostrarSlider()
})

btnAnter.addEventListener('click', ()=>{
    imgAtiva--;
    if(imgAtiva < 0){
        imgAtiva = contadorImg - 1;
    }

    mostrarSlider()
})

export default function mostrarSlider(){
    let antigaImg = document.querySelector('.slider-container .slider-img.ativo')
    let antigoBtnNav = document.querySelector('.btn-nav-img .btn-nav.ativo')

    antigaImg.classList.remove('ativo')

    antigoBtnNav.classList.remove('ativo')

     imgSlider[imgAtiva].classList.add('ativo')
     btnNav[imgAtiva].classList.add('ativo')
}

/* funcionamento dos botoes do slider */

btnNav.forEach((btn, indice)=>{
   btn.addEventListener('click', ()=>{
    imgAtiva = indice;
    mostrarSlider(  )
})
})

/* as imagens mudam sozinhas */

const tempoDeTroca = 8000; // Troca a cada 3 segundos (3000ms)

function avancarSlider() {
    imgAtiva++;
    if (imgAtiva >= contadorImg) {
        imgAtiva = 0;
    }
    mostrarSlider();
}

// Inicia a troca automática das imagens
let intervaloSlider = setInterval(avancarSlider, tempoDeTroca);


