/* eslint consistent-return: 1 */
import PhoneMask from "../../scripts/partials/phoneMask";
import InputValidator from "../../scripts/partials/InputValidator";

export default function PageReview(review) {
  const form = review.querySelector(".js-quest-review");
  const formInputs = form.querySelectorAll(".js-review-input");
  const formPhone = form.querySelector("input[name='phone']");

  formPhone.addEventListener("input", event => {
    const inputFiled = event.target;
    inputFiled.value = PhoneMask(inputFiled);
  });

  form.addEventListener("submit", event => {
    event.preventDefault();

    const isValid = validateform(formInputs);
    const url = form.action;

    if (isValid) {
      const data = new FormData(form);

      data.append("ajax", "Y");
      makeRequest(url, data);
    }
  });
}

function validateform(inputElements) {
  let isValid = true;

  for (let i = 0, len = inputElements.length; i < len; i++) {
    const inputEmailInvalidClass = inputElements[i].getAttribute(
      "data-invalid-class"
    );
    const inputEmailValidator = new InputValidator({
      domElement: inputElements[i],
      requiredFlag: inputElements[i].required,
      errorClass: inputEmailInvalidClass
    });

    const isTextInputsValid = validateTextInputs(inputEmailValidator);

    if (!isTextInputsValid) {
      isValid = false;
    }
  }

  return isValid;
}

function validateTextInputs(inputsValidators) {
  let isValid = true;

  if (Array.isArray(inputsValidators)) {
    for (let i = 0, len = inputsValidators.length; i < len; i++) {
      const isFormElementValid = inputsValidators[i].validate();
      if (!isFormElementValid) {
        isValid = false;
      }
    }
  } else {
    const isFormElementValid = inputsValidators.validate();
    if (!isFormElementValid) {
      isValid = false;
    }
  }

  return isValid;
}

function makeRequest(url, data) {
  fetch(url, {
    method: "POST",
    body: data
  }).then(function(response) {
    if (response.ok) {
      return response.blob();
    }
  });
}
