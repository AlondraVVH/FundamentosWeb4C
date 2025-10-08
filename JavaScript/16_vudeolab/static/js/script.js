console.log("funcionando")
function videoPlay(element){
    element.play();
}

function videoPause(element){
    element.pause();
}

function clickVideo(elemento){
    const videoGrande = document.getElementById("videoGrande");
    let sourceVideoGrande = videoGrande.src;
        videoGrande.src = elemento.src;
        elemento.src = sourceVideoGrande;

        const tituloPrincipal = document.getElementById("tituloPrincipal");
        let textoTitleMain = tituloPrincipal.textContent;
        
}