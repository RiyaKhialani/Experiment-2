document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const age = document.getElementById("age");
  let isValid = true;

  if (name.value.trim() === "") {
    showError(name, "Name cannot be empty");
    isValid = false;
  } else {
    showSuccess(name);
  }

  if (!validateEmail(email.value)) {
    showError(email, "Enter a valid email");
    isValid = false;
  } else {
    showSuccess(email);
  }

  if (password.value.length < 6) {
    showError(password, "Password must be at least 6 characters");
    isValid = false;
  } else {
    showSuccess(password);
  }

  if (age.value < 18 || age.value > 100 || age.value === "") {
    showError(age, "Enter a valid age (18-100)");
    isValid = false;
  } else {
    showSuccess(age);
  }

  if (isValid) {
    alert("Form submitted successfully!");
  }
}

function showError(input, message) {
  const parent = input.parentElement;
  const error = parent.querySelector(".error");
  error.textContent = message;
  input.style.border = "2px solid red";
}

function showSuccess(input) {
  const parent = input.parentElement;
  const error = parent.querySelector(".error");
  error.textContent = "";
  input.style.border = "2px solid green";
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
