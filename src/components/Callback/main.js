import PhoneMask from "../../scripts/partials/phoneMask";

function Callback(callback) {
  //  found all inputs wrappers in callback block
  const timeInputs = callback.querySelectorAll(".js-callback-input");
  const phoneInput = callback.querySelector(".js-phone");

  phoneInput.addEventListener("input", event => {
    const inputFiled = event.target;
    inputFiled.value = PhoneMask(inputFiled);
  });

  for (let i = 0, len = timeInputs.length; i < len; i++) {
    // initialize incriment and decriment buttons
    const incBtn = timeInputs[i].querySelector(".js-input-inc");
    const decBtn = timeInputs[i].querySelector(".js-input-dec");

    // initialize input field
    const inputField = timeInputs[i].querySelector("input");

    // get max and min input counts
    const maxCount = parseInt(inputField.getAttribute("max"), 10);
    const minCount = parseInt(inputField.getAttribute("min"), 10);

    incBtn.addEventListener("click", () => {
      inputField.value = updateInputCount(
        parseInt(inputField.value, 10),
        "inc",
        maxCount,
        null
      );
    });

    decBtn.addEventListener("click", () => {
      inputField.value = updateInputCount(
        parseInt(inputField.value, 10),
        "dec",
        null,
        minCount
      );
    });

    inputField.addEventListener("change", () => {
      if (parseInt(inputField.value, 10) < minCount) {
        inputField.value = minCount;
      } else if (parseInt(inputField.value, 10) > maxCount) {
        inputField.value = maxCount;
      }
    });
  }
}

function updateInputCount(value, modificator, max, min) {
  let val = value;

  if (modificator === "inc") {
    if (val < max) {
      val++;
    }
  } else if (val > min) {
    val--;
  }

  return val;
}

export default Callback;
