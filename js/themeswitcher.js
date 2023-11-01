
const themeToggle = document.getElementById('theme-toggle');
const divsToToggle = document.querySelectorAll('.some-div');

// Функция для сохранения текущей темы в localStorage
function saveThemeToLocalStorage(isDarkMode) {
  localStorage.setItem('isDarkMode', isDarkMode);
}

// Функция для загрузки текущей темы из localStorage
function loadThemeFromLocalStorage() {
  const isDarkMode = localStorage.getItem('isDarkMode') === 'true';
  return isDarkMode;
}

function toggleImages(isDarkMode) {
  divsToToggle.forEach((div) => {
    const image = div.querySelector('.deliver__diagram__img');
    if (isDarkMode) {
      image.src = './img/circle_diagram.png'; 
    } else {
      image.src = './img/circle_diagram_light.png'; 
    }
  });
}

// Обработчик события для кнопки переключения темы
themeToggle.addEventListener('click', () => {
  // Проверяем текущую тему (например, если есть класс 'dark-theme', то текущая тема - темная)
  const isDarkMode = divsToToggle[0].classList.contains('dark-theme');

  divsToToggle.forEach((div) => {
    if (isDarkMode) {
      div.classList.remove('dark-theme');
      div.classList.add('light-theme');
    } else {
      div.classList.remove('light-theme');
      div.classList.add('dark-theme');
    }
  });

  saveThemeToLocalStorage(!isDarkMode);

  toggleImages(!isDarkMode);
});

const savedDarkMode = loadThemeFromLocalStorage();
if (savedDarkMode) {

  divsToToggle.forEach((div) => {
    div.classList.remove('light-theme');
    div.classList.add('dark-theme');
  });
  toggleImages(true);
} else {
  divsToToggle.forEach((div) => {
    div.classList.remove('dark-theme');
    div.classList.add('light-theme');
  });
  toggleImages(false);
}
