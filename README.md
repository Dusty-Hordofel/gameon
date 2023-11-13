# CORP COMMENT - Accommodations and Activities Website

### Author Links

👋 Hello, I'm Hordofel Dusty BAMANA.

👇 Follow Me:

- [Twitter](https://twitter.com/hordofel)
- [LinkedIn](https://www.linkedin.com/in/dusty-hordofel-bamana-08389310a)

---

### 🚀 Description

rmtDev comment .....

---

# Directive du projet GameOn

1. Forkez ce repo ;
2. Il est conseillé d'utiliser VisualStudio Code et vous pouvez utiliser Docker, mais ce n'est pas obligatoire ;
3. Il n'y a aucune dépendance ;
4. Vous ne devez utiliser que du CSS personnalisé et du JavaScript pur, sans jQuery, Bootstrap ou autre librairie.

---

# issues à prendre en compte

1. Ajouter confirmation quand envoi réussi

- Après une validation réussie, inclure un message de confirmation de la soumission réussie pour l'utilisateur (ex. "Merci ! Votre réservation a été reçue.")

2. Ajouter validation ou messages d'erreur
   Des messages d'erreur spécifiques doivent apparaître sous l'entrée qui n'est pas correcte. Les messages d'erreur doivent s'afficher sous le champ de saisie associé. Exemples :

   - "Veuillez entrer 2 caractères ou plus pour le champ du nom."
   - "Vous devez choisir une option."
   - "Vous devez vérifier que vous acceptez les termes et conditions."
   - "Vous devez entrer votre date de naissance."

3. Implémenter entrées du formulaire

- (1) Lier les labels aux entrées dans le HTML en utilisant les attributs "for" et "id" dans le code existant. Corriger le code HTML quand nécessaire.
- (2) Utiliser du JavaScript pur (pas de jQuery) pour terminer le formulaire :

  - Le formulaire doit être valide quand l'utilisateur clique sur "Submit"
  - Les données doivent être saisies correctement :
    - (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
    - (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
    - (3) L'adresse électronique est valide.
    - (4) Pour le nombre de concours, une valeur numérique est saisie.
    - (5) Un bouton radio est sélectionné.
    - (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
  - Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.

4. TODO : fermer la modale

- Ajouter la fonctionnalité au bouton (x)

---

## Demo

![Corp_Comment Desktop Demo](./images/maquettes/Desktop.png "Desktop Demo")
![Corp_Comment Tablet Demo](./images/maquettes/Tablet.png "Tablet Demo")

---

## Section 1. Setup

---

### 1. Create folder structure

- clone a github repository named `[rmtDev](https://github.com/OpenClassrooms-Student-Center/GameOn-website-FR.git)`
- create a folder structure
- create a setup branch `Setup` in github repository to save the setup folder structure

---

## Section 2. validation

### 2. form validation

- add [form validation algorithm](modal.js) to handle `errors`

### 3. close modal

```js
const close = document.querySelector(".close");

// close modal event
close.addEventListener("click", closeModal);

//close modal form
function closeModal() {
  modalbg.style.display = "none";
}
```

---

## Section 3. inscription

### 4. validate inscription

- hanble confirmation form validation

```js
//inscription submition and lauch thanks modal
firstSubmitButton.addEventListener("click", () => {
  // console.log("Love you ldzdffz");

  //display subscription message
  firstModalbg.style.display = "none";
  secondModalbg.style.display = "block";

  modalbg2.style.visibility = "visible";
});
```

### 5. close subsciption modal

- close subscription modal

```js
//close modal 2

secondClose.addEventListener("click", () => {
  console.log(" mdafzfaffaffeza");
  modalbg2.style.display = "none";
  secondModalbg.style.display = "none";
});

//close inscription modal
secondSubmitButton.addEventListener("click", () => {
  console.log("Mama na Yo Ndeko");
  secondModalbg.style.display = "none";
  modalbg2.style.visibility = "hidden";
});
```

### 6. submit validation algorithm

- verify our data form is valid

```js
function checkAllInputs() {
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
    modalbg2.style.visibility = "visible";
  }
}
```

- update checkbox and radio input

```js
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

function radio() {
  const yoyo = document.reserve.querySelector("#choosed-location");
  console.log("🚀 ~ file: modal.js:112 ~ radio ~ yoyo", yoyo);
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
```

### 7. clear input after successful submission

```js
//TODO:clear input value after submitting form
//select * input value
const formdataDivs = document.querySelectorAll("form input");
// const formdataDivs = document.querySelectorAll("form input");
for (let i = 0; i < formdataDivs.length - 1; i++) {
  //clear input value
  formdataDivs[i].value = "";

  const olive = formdataDivs[i].parentElement.className;
  console.log("🚀 ~ file: modal.js:151 ~ validationForm ~ olive:", olive);
  //remove sucess class
  formdataDivs[i].parentElement.className = "formData";
}
```

### 8. Add to Main Branch
