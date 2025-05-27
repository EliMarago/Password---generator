const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandoNumber,
  symbol: getRandomsymbol,
};

//fromCharCode - Ogni numero in Unicode (o ASCII per i caratteri base) corrisponde a un simbolo o un carattere
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandoNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomsymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomsymbol());
