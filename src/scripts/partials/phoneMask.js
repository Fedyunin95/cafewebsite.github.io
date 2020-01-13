export default function PhoneMask(inputField) {
  let inputFiledValue = inputField.value;

  const isNumber = /\d/.test(inputFiledValue[inputFiledValue.length - 1]);
  if (isNumber) {
    if (inputFiledValue.indexOf("+7") === -1) {
      inputFiledValue = `+7 (${inputFiledValue}`;
    } else if (inputFiledValue.length === 7) {
      inputFiledValue = `${inputFiledValue}) `;
    } else if (inputFiledValue.length === 12 || inputFiledValue.length === 15) {
      inputFiledValue = `${inputFiledValue}-`;
    } else if (inputFiledValue === "") {
      inputFiledValue = "";
    }
  } else {
    inputFiledValue = inputFiledValue.slice(0, inputFiledValue.length - 1);
  }

  return inputFiledValue;
}
