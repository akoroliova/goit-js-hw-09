const feedbackForm = document.querySelector('form.feedback-form');

feedbackForm.addEventListener('input', handleInput);

function handleInput(event) {
  const target = event.target;

  if (target.tagName === 'input' || target.tagName === 'textarea') {
    const email = feedbackForm.elements.email.value.trim();
    const message = feedbackForm.elements.message.value.trim();

    const inputObject = {};
    inputObject.email = email;
    inputObject.message = message;

    localStorage.setItem('feedback-form-state', JSON.stringify(inputObject));

    console.log(`This is "localStorage" DURING input: `);
    console.log(localStorage);
  }
}

console.log(`This is "localStorage" AFTER input: `);
console.log(localStorage);

feedbackForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const email = feedbackForm.elements.email.value;
  const message = feedbackForm.elements.message.value;
  if (email === '' || message === '') {
    return alert('All form fields must be filled in');
  }

  const target = event.target;
  if (target.tagName === 'button') {
    feedbackForm.reset();
    console.log(`This is "localStorage" after form reset: `);
    console.log(localStorage);

    localStorage.clear();
    console.log(`This is "localStorage" after localStorage clear: `);
    console.log(localStorage);
  }
}

// Введення даних в одне поле форми не видаляє дані в сховищі для іншого

// 2 Під час (пере)завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, то заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми. Тобто При оновленні сторінки дані з локального сховища підставляються в елементи форми, у полях форми відсутні undefined. Потрібно перевіряти всі значення, які ви читаєте з localStorage і записуєте в поля форми. Якщо там пусто, вам у поля запишеться undefined.
