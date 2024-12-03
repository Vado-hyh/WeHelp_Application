// JavaScript
document.addEventListener("DOMContentLoaded", () => {
    const toggleMenu = document.querySelector('.toggle');
    const questionMenu = document.querySelector('.question-menu');

    toggleMenu.addEventListener('click', (event) => {
        event.preventDefault(); 
        questionMenu.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        if (!questionMenu.contains(event.target)) {
            questionMenu.classList.remove('active');s
        }
    });
});
