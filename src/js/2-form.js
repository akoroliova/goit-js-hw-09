const loginForm = document.querySelector('form.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (email === '' || message === '') {
    return alert('All form fields must be filled in');
  }

  const userObject = {};
  userObject.email = email;
  userObject.message = message;

  console.log(userObject);

  form.reset();
}
