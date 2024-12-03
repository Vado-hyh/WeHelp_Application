// JavaScript
document.addEventListener("DOMContentLoaded", () => {
    const toggleMenu = document.querySelector('.toggle'); // 選取 "Question List"
    const questionMenu = document.querySelector('.question-menu'); // 選取包含下拉選單的父元素

    toggleMenu.addEventListener('click', (event) => {
        event.preventDefault(); // 阻止默認的跳轉行為
        questionMenu.classList.toggle('active'); // 切換 active class
    });

    // 選單以外區域點擊時關閉下拉選單
    document.addEventListener('click', (event) => {
        if (!questionMenu.contains(event.target)) {
            questionMenu.classList.remove('active'); // 移除 active class
        }
    });
});
