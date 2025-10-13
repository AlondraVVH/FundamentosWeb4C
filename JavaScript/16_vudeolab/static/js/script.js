
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
        const textoPequeno = elemento.nextElementSibling;
        let contentTextoPequeno = textoPequeno.textContent

        tituloPrincipal.textContent = contentTextoPequeno;
        textoPequeno.textContent = textoTitleMain;

}