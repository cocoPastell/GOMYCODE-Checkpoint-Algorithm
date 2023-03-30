let testSentence = "I have simply chosen a sentence.";
let counterCharacter = 1;
let counterWord = 1;
let counterVowels = 0;
let i = 0;
let arrayVowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

while (testSentence[i] != ".") {
  counterCharacter++;

  if (testSentence[i] == " ") {
    counterWord++;
  }

  if (arrayVowels.includes(testSentence[i])) {
    counterVowels++;
  }
  i++;
}

console.log(counterCharacter);
console.log(counterWord);
console.log(counterVowels);
