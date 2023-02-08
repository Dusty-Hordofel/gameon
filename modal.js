function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelector(".close");

const form = document.getElementById("form");
const firstname = document.getElementById("first");
const lastname = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const radioButtons = document.querySelectorAll('input[type="radio"]');
const quantity = document.getElementById("quantity");
const firstCheckbox = document.querySelector(
  'input[type="checkbox"]:first-of-type'
);
let checked = false;
let allChecked = true;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
close.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// DOM

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const birthdateValue = birthdate.value.trim();
  const quantityValue = quantity.value.trim();

  firstnameValue === ""
    ? setErrorFor(firstname, "Le prénom ne peut pas être vide")
    : setSuccessFor(firstname);

  lastnameValue === ""
    ? setErrorFor(lastname, "Le nom ne peut pas être vide")
    : setSuccessFor(lastname);

  emailValue === ""
    ? setErrorFor(email, "L'email ne peut pas être vide")
    : !isEmail(emailValue)
    ? setErrorFor(email, "L'email n'est pas valide")
    : setSuccessFor(email);

  birthdateValue === ""
    ? setErrorFor(birthdate, "La date  ne peut pas être vide")
    : setSuccessFor(birthdate);

  quantityValue === ""
    ? setErrorFor(quantity, "Le nombre de tournoi ne peut pas être vide")
    : setSuccessFor(quantity);

  // select a tournament
  radio();
  // validate terms
  checkbox();
  //show a success message
}

function setErrorFor(input, message) {
  //select parent element of input element witch is the ".form-control"
  const formData = input.parentElement;
  //target small element witch in  ".form-control"
  const small = formData.querySelector("small");
  //add error class
  formData.className = "formData error";
  console.log("🚀 ~ file: modal.js:92 ~ setErrorFor ~ formData", formData);
  //add error message in small tag
  small.innerText = message;

  //remove error text
  // setTimeout(() => {
  //   small.innerText = "";
  // }, 20000);
}

function setSuccessFor(input) {
  const formData = input.parentElement;
  //add success class
  formData.className = "formData success";
  //remove error text
  //target small element witch in  ".form-control"
  const small = formData.querySelector("small");
  //add error message in small tag
  small.innerText = "";

  //add
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function radio() {
  const yoyo = document.reserve.querySelector("#choosed-location");
  console.log("🚀 ~ file: modal.js:112 ~ radio ~ yoyo", yoyo);
  radioButtons.forEach((radioButton) => {
    if (radioButton.checked) {
      // yoyo.innerText = "MOJDZ";
      checked = true;
      console.log("merci pour la selection ");
      yoyo.innerText = "";
    }
  });

  if (!checked) {
    // alert("Au moins un bouton radio doit être sélectionné.");

    yoyo.innerText = "Au moins un bouton radio doit être sélectionné.";
    console.log("🚀 ~ file: modal.js:113 ~ yoyo", yoyo);

    //remove error message in small tag
    // setTimeout(() => {
    //   yoyo.innerText = "";
    // }, 20000);
  }
}

function checkbox() {
  const agreedTerms = document.reserve.querySelector("#agreed-terms");

  !firstCheckbox.checked
    ? (agreedTerms.innerText = `Cocher sur "J'ai lu et accepté les conditions d'utilisation."`)
    : (agreedTerms.innerText = "");
}
