// Отримуємо елементи input і span з HTML
  const input = document.getElementById('name-input');
  const output = document.getElementById('name-output');

  // Додаємо обробник події на input
  input.addEventListener('input', function() {
    // Очищаємо значення інпуту від пробілів по краях
    const trimmedValue = input.value.trim();
    
    // Якщо значення не порожнє після обрізання пробілів, підставляємо його у span
    // Інакше підставляємо "Anonymous"
    output.textContent = trimmedValue !== '' ? trimmedValue : 'Anonymous';
  });
   