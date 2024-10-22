// Функція для генерації випадкового кольору
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  // Отримуємо елементи з DOM
  const input = document.querySelector('#controls input');
  const createBtn = document.querySelector('[data-create]');
  const destroyBtn = document.querySelector('[data-destroy]');
  const boxesContainer = document.getElementById('boxes');

  // Функція для створення елементів
  function createBoxes(amount) {
    // Очищаємо контейнер перед створенням нових елементів
    boxesContainer.innerHTML = '';

    // Початковий розмір елементів
    let boxSize = 30;

    // Створюємо колекцію елементів
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i++) {
      const div = document.createElement('div');
      div.style.width = `${boxSize}px`;
      div.style.height = `${boxSize}px`;
      div.style.backgroundColor = getRandomHexColor();
      div.style.margin = '5px';
      fragment.appendChild(div);

      // Збільшуємо розмір наступного елемента
      boxSize += 10;
    }

    // Додаємо колекцію до контейнера
    boxesContainer.appendChild(fragment);
  }

  // Функція для очищення елементів
  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }

  // Обробник для кнопки Create
  createBtn.addEventListener('click', () => {
    const amount = Number(input.value);

    // Перевіряємо, чи кількість елементів у межах від 1 до 100
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
    } else {
      alert('Please enter a number between 1 and 100');
    }

    // Очищаємо значення в input після створення
    input.value = '';
  });

  // Обробник для кнопки Destroy
destroyBtn.addEventListener('click', destroyBoxes);
  