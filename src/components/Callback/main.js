function Callback(callback) {
  //  found all inputs wrappers in callback block
  const timeInputs = callback.querySelectorAll(".js-callback-input");

  for (let i = 0, len = timeInputs.length; i < len; i++) {
    // initialize incriment and decriment buttons
    const incBtn = timeInputs[i].querySelector(".js-input-inc");
    const decBtn = timeInputs[i].querySelector(".js-input-dec");

    // initialize input field
    const inputField = timeInputs[i].querySelector("input");

    // get max and min input counts
    const maxCount = parseInt(inputField.getAttribute("max"));
    const minCount = parseInt(inputField.getAttribute("min"));

    incBtn.addEventListener("click", () => {
      inputField.value = updateInputCount(
        parseInt(inputField.value),
        "inc",
        maxCount,
        null
      );
    });

    decBtn.addEventListener("click", () => {
      inputField.value = updateInputCount(
        parseInt(inputField.value),
        "dec",
        null,
        minCount
      );
    });

    inputField.addEventListener("change", () => {
      if (parseInt(inputField.value) < minCount) {
        inputField.value = minCount;
      } else if (parseInt(inputField.value) > maxCount) {
        inputField.value = maxCount;
      }
    });
  }
}

function updateInputCount(value, modificator, max, min) {
  if (modificator === "inc") {
    if (value < max) {
      value++;
    }
  } else if (value > min) {
    value--;
  }

  return value;
}

export default Callback;
