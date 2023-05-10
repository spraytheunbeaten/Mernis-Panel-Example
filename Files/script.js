const form = document.querySelector('form');
const emailInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    alert('Please enter a valid email and password.');
  } else {
    alert(`Logged in with email: ${email} and password: ${password}`);
  }
});
