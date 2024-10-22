  // Отримуємо форму
  const form = document.querySelector('.login-form');

  // Додаємо обробник події submit на форму
  form.addEventListener('submit', function(event) {
    // Запобігаємо перезавантаженню сторінки
    event.preventDefault();
    
    // Отримуємо елементи форми
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    
    // Перевіряємо, чи всі поля заповнені
    if (email === '' || password === '') {
      alert('All form fields must be filled in');
      return;
    }
    
    // Створюємо об'єкт із значеннями форми
    const formData = {
      email: email,
      password: password
    };
    
    // Виводимо об'єкт у консоль
    console.log(formData);
    
    // Очищаємо форму
    form.reset();
  });
