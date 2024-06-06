const palindromo = (str) => {
  const lowerStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const length = lowerStr.length;

  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (lowerStr[i] !== lowerStr[length - 1 - i]) {
      return false;
    }
  }

  return true;
};

const phrase = prompt("Ingresa una frase o palabra:").trim();

const itsPhrase = phrase.includes(" ");

if (itsPhrase) {
  if (palindromo(phrase)) {
    console.log(`La frase "${phrase}" es un palíndromo.`);
  } else {
    console.log(`La frase "${phrase}" no es un palíndromo.`);
  }
} else {
  if (palindromo(phrase)) {
    console.log(`La palabra "${phrase}" es un palíndromo.`);
  } else {
    console.log(`La palabra "${phrase}" no es un palíndromo.`);
  }
}
