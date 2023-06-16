const form = document.querySelector("#subscribeForm");
const nameInput = document.querySelector("#nameInput");
const emailInput = document.querySelector("#emailInput");
const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  if (nameInput.value.trim() === "") {
    displayErrorMessage(nameError,"Please enter your name.");
  } else if (!/^[a-zA-Z ]+$/.test(nameInput.value)) {
    displayErrorMessage(nameError,"Please enter your name using only letters.");
  } else {
    displayErrorMessage(nameError," ");
  }

  if (emailInput.value.trim() === "") {
    displayErrorMessage(emailError,"Please enter your email address.");
  } else if (!isValidEmail(emailInput.value)) {
    displayErrorMessage(emailError,"Please enter a valid email address.");
  } else {
    displayErrorMessage(emailError," ");
  }

  if (nameError.innerText === "" && emailError.innerText === "") {
    window.location.href = "/greeting/?name=" + nameInput.value;
}
});

function isValidEmail(email) {
  const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
  return emailRegex.test(email);
}

function displayErrorMessage(errorElement, message) {
  errorElement.innerText = message;
}
