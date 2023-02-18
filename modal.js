function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//--------------------------- DOM Elements--------------------------------------------------------

//form selector
const formData = document.querySelectorAll(".formData");

//input selector's
const form = document.getElementById("form");
const firstname = document.getElementById("first");
const lastname = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const radioButtons = document.querySelectorAll('input[type="radio"]');
const quantity = document.getElementById("quantity");

//chexbox selector
const firstCheckbox = document.querySelector(
  'input[type="checkbox"]:first-of-type'
);

//submit selector's
const submitButtons = document.querySelectorAll('input[type="submit"]');
const firstSubmitButton = submitButtons[0];
const secondSubmitButton = submitButtons[1];

//close selector's
const close = document.querySelectorAll(".close");
const firstClose = close[0];
const secondClose = close[1];

//modal selector's
const modalBtn = document.querySelectorAll(".modal-btn");
const modalbg = document.querySelectorAll(".bground");
const firstModalbg = modalbg[0];
const secondModalbg = modalbg[1];

//---------------------------MODAL 1-----------------------------------------

// launch modal event 1
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form 1
function launchModal() {
  firstModalbg.style.display = "block";
}

//close modal 1
firstClose.addEventListener("click", () => {
  console.log("mamamama");
  firstModalbg.style.display = "none";
});

//inscription submition and lauch thanks modal
// firstSubmitButton.addEventListener("click", () => {
//   checkAllInputs();
// });

//---------------------------MODAL 2-----------------------------------------------------------------

//close modal 2

secondClose.addEventListener("click", () => {
  console.log(" mdafzfaffaffeza");
  // modalbg2.style.display = "none";
  secondModalbg.style.display = "none";
});

//close inscription modal
secondSubmitButton.addEventListener("click", () => {
  console.log("Mama na Yo Ndeko");
  secondModalbg.style.display = "none";
  // modalbg2.style.display = "none";
  // modalbg2.style.visibility = "hidden";
});

//----------------------------------SUBMIT FORM--------------------------------------------------------------

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //check input validity
  checkInputs();
  //check validation form validity
  validationForm();
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
    : !isValidEmail(emailValue)
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
}

function validationForm() {
  //verify if error classname existe
  const formdataDivs = document.querySelectorAll(".formData");
  let hasSuccess = true; // Assume that all formdata divs have an error class by default

  for (let i = 0; i < formdataDivs.length; i++) {
    if (!formdataDivs[i].classList.contains("success")) {
      // If a formdata div doesn't have an error class
      hasSuccess = false; // Set hasSuccess to false
      break; // Stop the loop since there's no need to check the rest of the formdata divs
    }
  }

  if (!hasSuccess) {
    console.log("Not All formdata divs have an success class.");
    return;
  } else {
    console.log("All formdata divs have an success class.");
    firstModalbg.style.display = "none";
    secondModalbg.style.display = "block";
    form.reset();
  }
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

  //target small element witch in  ".form-control"
  const small = formData.querySelector("small");

  //remove error text in small tag
  small.innerText = "";

  //add
}

function isValidEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function radio() {
  const yoyo = document.reserve.querySelector("#choosed-location");
  console.log("🚀 ~ file: modal.js:112 ~ radio ~ yoyo", yoyo);

  let checked = false;

  radioButtons.forEach((radioButton) => {
    if (radioButton.checked) {
      // yoyo.innerText = "MOJDZ";
      checked = true;
      console.log("merci pour la selection ");
      yoyo.innerText = "";
      //add a className to the radioButton
      const formData = yoyo.parentElement;
      formData.className = "formData success";
    }
  });

  if (!checked) {
    // alert("Au moins un bouton radio doit être sélectionné.");

    yoyo.innerText = "Au moins un bouton radio doit être sélectionné.";
    console.log("🚀 ~ file: modal.js:113 ~ yoyo", yoyo);

    //add a className to the radioButton
    const formData = yoyo.parentElement;
    formData.className = "formData error";

    //remove error message in small tag
    // setTimeout(() => {
    //   yoyo.innerText = "";
    // }, 20000);
  }
}

function checkbox() {
  const agreedTerms = document.reserve.querySelector("#agreed-terms");

  if (!firstCheckbox.checked) {
    agreedTerms.innerText = `Cocher sur "J'ai lu et accepté les conditions d'utilisation."`;
    const formData = agreedTerms.parentElement;
    formData.className = "formData error";
  } else {
    agreedTerms.innerText = "";
    const formData = agreedTerms.parentElement;
    formData.className = "formData success";
  }
}
