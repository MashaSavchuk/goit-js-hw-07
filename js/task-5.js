// Функція для генерації випадкового кольору в hex-форматі
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  // Отримуємо елементи: кнопку, span і body
  const changeColorButton = document.querySelector('.change-color');
  const colorSpan = document.querySelector('.color');
  const body = document.body;

  // Додаємо обробник події на кнопку
  changeColorButton.addEventListener('click', () => {
    // Генеруємо випадковий колір
    const randomColor = getRandomHexColor();
    
    // Змінюємо колір фону body
    body.style.backgroundColor = randomColor;
    
    // Відображаємо колір в span
    colorSpan.textContent = randomColor;
  });
