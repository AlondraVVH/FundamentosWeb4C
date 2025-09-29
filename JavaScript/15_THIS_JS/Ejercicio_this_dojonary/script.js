function login(element) {
    if (element.innerText === "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}

function hide(element) {
    element.remove();
}

function liked(element) {
    let likeSpan = element.querySelector('span');
    let currentLikes = parseInt(likeSpan.innerText);
    currentLikes++;
    likeSpan.innerText = currentLikes;}
