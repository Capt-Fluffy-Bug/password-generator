let button = document.getElementById("button");
let output1 = document.getElementById("output1");
let output2 = document.getElementById("output2");
let lengthTitle = document.getElementById("password-length-title");
let passwordSlider = document.getElementById("password-length");
let alphaCheck = document.getElementById("alphabets");
let numCheck = document.getElementById("numbers");
let charCheck = document.getElementById("chars");

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const chars = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let characters = alphabet;

let passLength = passwordSlider.value;
lengthTitle.textContent = `Password Length: ${passLength}`;

function getRandomIndex() {
  return Math.floor(Math.random() * characters.length);
}

function generatePassword() {
  let password = [];
  for (let i = 0; i < passLength; i++) {
    password.push(characters[getRandomIndex()]);
  }

  return password.join("");
}

button.addEventListener("click", function () {
  if (characters.length > 0) {
    output1.textContent = generatePassword();
    output2.textContent = generatePassword();
  } else {
    alert("You must select at least one character type for the password");
  }
});

passwordSlider.oninput = function () {
  passLength = passwordSlider.value;
  lengthTitle.textContent = `Password Length: ${passLength}`;
};

output1.addEventListener("click", function () {
  let text = output1.textContent;
  navigator.clipboard.writeText(text);
  output1.nextElementSibling.textContent = "Copied!";
  setTimeout(function () {
    output1.nextElementSibling.textContent = "";
  }, 2000);
});

output2.addEventListener("click", function () {
  let text = output2.textContent;
  navigator.clipboard.writeText(text);
  output2.nextElementSibling.textContent = "Copied!";
  setTimeout(function () {
    output2.nextElementSibling.textContent = "";
  }, 2000);
});

alphaCheck.addEventListener("change", function () {
  if (this.checked) {
    characters.push(...alphabet);
    console.log(this.value);

  } else {
    characters = characters.filter((x) => !alphabet.includes(x));
    console.log(`unselected ${this.value}`);
  }
});

numCheck.addEventListener("change", function () {
  if (this.checked) {
    characters.push(...numbers);
    console.log(this.value);

  } else {
    characters = characters.filter((x) => !numbers.includes(x));
    console.log(`unselected ${this.value}`);
  }
});

charCheck.addEventListener("change", function () {
  if (this.checked) {
    characters.push(...chars);
    console.log(this.value);

  } else {
    characters = characters.filter((x) => !chars.includes(x));
    console.log(`unselected ${this.value}`);
  }
});
