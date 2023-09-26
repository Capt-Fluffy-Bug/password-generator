let button = document.getElementById("button");
let output1 = document.getElementById("output1");
let output2 = document.getElementById("output2");

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passLength = 15

function getRandomIndex() {
    return Math.floor(Math.random() * characters.length)
}

function generatePassword() {
    let password = []
    for(let i = 0; i < passLength; i++){
        password.push(characters[getRandomIndex()])
    }

    return password.join("")
}

button.addEventListener("click", function() {
    output1.textContent = generatePassword()
    output2.textContent = generatePassword()
})

