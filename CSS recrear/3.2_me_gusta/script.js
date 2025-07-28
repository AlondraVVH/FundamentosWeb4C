document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-button');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const postCard = button.closest('.post-card');
            const likesNumberSpan = postCard.querySelector('.likes-number');
            let currentLikes = parseInt(likesNumberSpan.textContent);
            currentLikes++;
            likesNumberSpan.textContent = currentLikes;
        });
    });
});