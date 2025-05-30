const resultsEl = document.querySelector(".result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");
const copy = document.querySelector(".copy");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomsymbol,
};

//check checkbox
generateEl.addEventListener("click", function () {
  const length = Number(lengthEl.value); // prende il valore numerico
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultsEl.innerText = generetePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});
function generetePassword(lower, upper, number, symbol, length) {
  let generetedPassword = "";
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  if (typesCount === 0) {
    return "";
  }
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generetedPassword += randomFunc[funcName]();
    });
  }
  return generetedPassword.slice(0, length);
}

//fromCharCode - Ogni numero in Unicode (o ASCII per i caratteri base) corrisponde a un simbolo o un carattere
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomsymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
//copiare elemento
clipboardEl.addEventListener("click", function () {
  navigator.clipboard.writeText(resultsEl.textContent);
  clipboardEl.textContent = "Copy";
  setTimeout(() => {
    clipboardEl.innerHTML = `<i class="far fa-clipboard"></i>`;
  }, 1500);
});
