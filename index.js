let button = document.getElementById("button");
let output1 = document.getElementById("output1");
let output2 = document.getElementById("output2");
let lengthTitle = document.getElementById("password-length-title");
let passwordSlider = document.getElementById("password-length");
let alphaCheck = document.getElementById("alphabets");
let numCheck = document.getElementById("numbers");
let charCheck = document.getElementById("chars");

// declare the 3 types of characters the user can select from
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

// the passwords will contain only alphabets by default
let characters = alphabet;

// set password length according to slider value.
let passLength = passwordSlider.value;
lengthTitle.textContent = `Password Length: ${passLength}`;

// helper function to get a random index
function getRandomIndex() {
  return Math.floor(Math.random() * characters.length);
}

// Generates a random password
function generatePassword() {
  let password = [];
  for (let i = 0; i < passLength; i++) {
    password.push(characters[getRandomIndex()]);
  }

  return password.join("");
}

// handles click event for "generate password" button
button.addEventListener("click", function () {
  if (characters.length > 0) {
    output1.textContent = generatePassword();
    output2.textContent = generatePassword();
  } else {
    alert("You must select at least one character type for the password");
  }
});

// handles slider input
passwordSlider.oninput = function () {
  passLength = passwordSlider.value;
  lengthTitle.textContent = `Password Length: ${passLength}`;
};

// handles click to copy for output box 1
output1.addEventListener("click", function () {
  let text = output1.textContent;
  navigator.clipboard.writeText(text);
  output1.nextElementSibling.textContent = "Copied!";
  setTimeout(function () {
    output1.nextElementSibling.textContent = "";
  }, 2000);
});

// handles click to copy for output box 2
output2.addEventListener("click", function () {
  let text = output2.textContent;
  navigator.clipboard.writeText(text);
  output2.nextElementSibling.textContent = "Copied!";
  setTimeout(function () {
    output2.nextElementSibling.textContent = "";
  }, 2000);
});

// handles checkbox selection for Alphabets
alphaCheck.addEventListener("change", function () {
  if (this.checked) {
    characters.push(...alphabet);
  } else {
    characters = characters.filter((x) => !alphabet.includes(x));
  }
});

// handles checkbox selection for Numbers
numCheck.addEventListener("change", function () {
  if (this.checked) {
    characters.push(...numbers);
  } else {
    characters = characters.filter((x) => !numbers.includes(x));
  }
});

// handles checkbox selection for Symbols
charCheck.addEventListener("change", function () {
  if (this.checked) {
    characters.push(...chars);
  } else {
    characters = characters.filter((x) => !chars.includes(x));
  }
});
