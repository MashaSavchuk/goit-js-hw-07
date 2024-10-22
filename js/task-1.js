// Отримуємо всі елементи з класом "item" всередині ul#categories
const categories = document.querySelectorAll('#categories .item');

// Виводимо кількість категорій
console.log(`Number of categories: ${categories.length}`);

// Проходимо по кожному елементу категорії
categories.forEach(category => {
  
  const categoryTitle = category.querySelector('h2').textContent; // Знаходимо заголовок <h2> і виводимо його текст
  
  const categoryItemsCount = category.querySelectorAll('ul li').length; // Знаходимо всі вкладені <li> і рахуємо їх кількість

  // Виводимо заголовок і кількість елементів у категорії
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItemsCount}`);
});
