//cronometro
function cronometro(){

const relogio = document.querySelector('.cronometro')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
const teste = document.querySelector('.cronometro')

let segundos = 0 
let timer;

function formataSegundos(x){
    const data = new Date( x * 1000);

    return data.toLocaleTimeString('pt-BR', {
        hour12: false, timeZone: 'UTC'
    });
    
}


function iniciaTimer (){
    timer = setInterval(()=>{
        segundos++
        relogio.textContent = formataSegundos(segundos);
    }, 1000);
}


 document.addEventListener('click', (e)=> {
    const el = e.target;

    if(el==iniciar) {
        teste.classList.remove('pausado')
        clearInterval(timer);
        iniciaTimer();
    }
    if(el==pausar){
        clearInterval(timer);
        teste.classList.add('pausado')
    }
    if(el==zerar){
        teste.classList.remove('pausado')
        relogio.textContent = '00:00:00';
        clearInterval(timer);
        segundos= 0;
    }
 })


}
cronometro();



//Relogio

function relogio (){

    const horas = document.querySelector('.horas');
    const minutos = document.querySelector('.minutos');
    const segundos = document.querySelector('.segundos');
    

function formataHora(x){
    return x<10 ? '0' + x : x
}


    let horario = setInterval(()=>{
    let data = new Date(); 

    let hr = data.getHours();
    let min = data.getMinutes();
    let segs = data.getSeconds();

    horas.innerHTML = formataHora(hr);
    minutos.innerHTML = formataHora(min);
    segundos.innerHTML = formataHora(segs);

    }, 1000)
    return horario;

}
relogio();