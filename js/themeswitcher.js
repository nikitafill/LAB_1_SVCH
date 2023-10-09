/*/ Получаем ссылку на кнопку переключения темы
const themeToggle = document.getElementById('theme-toggle');

// Получаем ссылку на элементы DOM, которые нужно изменить (например, body или другие контейнеры)
const body = document.body; // Тело страницы

// Обработчик события для кнопки переключения темы
themeToggle.addEventListener('click', () => {
  // Проверяем текущую тему (например, если есть класс 'dark-theme', то текущая тема - темная)
  const isDarkMode = body.classList.contains('dark-theme');

  // Если текущая тема - темная, переключаемся на светлую, и наоборот
  if (isDarkMode) {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
  } else {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
  }
});*/

const themeToggle = document.getElementById('theme-toggle');

// Получаем ссылки на дивы, для которых нужно менять тему
const divsToToggle = document.querySelectorAll('.some-div');

// Обработчик события для кнопки переключения темы
themeToggle.addEventListener('click', () => {
  // Проверяем текущую тему (например, если есть класс 'dark-theme', то текущая тема - темная)
  const isDarkMode = divsToToggle[0].classList.contains('dark-theme');

  // Меняем тему только для выбранных дивов
  divsToToggle.forEach((div) => {
    if (isDarkMode) {
      div.classList.remove('dark-theme');
      div.classList.add('light-theme');
    } else {
      div.classList.remove('light-theme');
      div.classList.add('dark-theme');
    }
  });
});