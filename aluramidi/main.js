function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio'){        
        elemento.play();
        }else{
        console.log('Elemento não encontrado ou seletor inválido');
    }    
}
const listaDeTeclas = document.querySelectorAll(".tecla");

/* loop 'para' - não apenas depende de uma condição ser verdadeira ou falsa para funcionar, e não
depende de um contador externo para funcionar*/
for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`
    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){
        console.log(evento.code);
        if(evento.code === 'Space' || evento.code === 'Enter' || evento.code === 'NumpadEnter'){
            tecla.classList.add('ativa'); 

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
            }
        }
    }
}

/* loop 'enquanto' - depende de uma condição ser verdadeira ou falsa para funcionar,
dependendo de um contador externo para funcionar*/
/*let contador = 0;
while(contador < listaDeTeclas.length){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    console.log(instrumento);
    //template string
    const idAudio = `#som_${instrumento}`;
    //mostra no console do navegador
    //console.log(idAudio);
    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    contador++;
    //mostra no console do navegador
    //console.log(contador);
}*/


/* ------------- mesmo código sem usar os loops ------------------

//Pom -----------------------------------------------------------------------------
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}
document.querySelector(".tecla_pom").onclick = tocaSomPom;//traz o botão da tecla pom

//Clap -----------------------------------------------------------------------------
function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
}
document.querySelector(".tecla_clap").onclick = tocaSomClap;//traz o botão da tecla clap

//Tim -----------------------------------------------------------------------------
function tocaSomTim(){
    document.querySelector('#som_tecla_tim').play();
}
document.querySelector(".tecla_tim").onclick = tocaSomTim;//traz o botão da tecla tim

//Puff -----------------------------------------------------------------------------
function tocaSomPuff(){
    document.querySelector('#som_tecla_puff').play();
}
document.querySelector(".tecla_puff").onclick = tocaSomPuff;//traz o botão da tecla Puff

//Splash -----------------------------------------------------------------------------
function tocaSomSplash(){
    document.querySelector('#som_tecla_splash').play();
}
document.querySelector(".tecla_splash").onclick = tocaSomSplash;//traz o botão da tecla Splash

//Toim -----------------------------------------------------------------------------
function tocaSomToim(){
    document.querySelector('#som_tecla_toim').play();
}
document.querySelector(".tecla_toim").onclick = tocaSomToim;//traz o botão da tecla Toim

//Psh ----------------------------------------------------------------------------
function tocaSomPsh(){
    document.querySelector('#som_tecla_psh').play();
}
document.querySelector(".tecla_psh").onclick = tocaSomPsh;//traz o botão da tecla Psh

//Tic -----------------------------------------------------------------------------
function tocaSomTic(){
    document.querySelector('#som_tecla_tic').play();
}
document.querySelector(".tecla_tic").onclick = tocaSomTic;//traz o botão da tecla Tic

//Tom -----------------------------------------------------------------------------
function tocaSomTom(){
    document.querySelector('#som_tecla_tom').play();
}
document.querySelector(".tecla_tom").onclick = tocaSomTom;//traz o botão da tecla Tom
*/
