/*const languageToggle = document.querySelector(".language__icon");

// Задайте начальный язык
let currentLanguage = "En";

// Создайте функцию для смены языка
function toggleLanguage() {
    if (currentLanguage === "Ru") {
        // Если текущий язык - русский, переключите на другой язык
        languageToggle.textContent = "En";
        currentLanguage = "En"; // Измените на нужный вам язык
    } else {
        // В противном случае переключите обратно на русский
        languageToggle.textContent = "Ru";
        currentLanguage = "Ru";
    }
}*/

// Получаем кнопку и контент
const themeToggle = document.getElementById("theme-toggle");
const content = document.getElementById("content");

// Слушаем событие клика на кнопке
themeToggle.addEventListener("click", () => {
    // Проверяем текущую тему
    if (document.body.classList.contains("light-theme")) {
        // Переключаемся на темную тему
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
    } else {
        // Переключаемся на светлую тему
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
    }
});
