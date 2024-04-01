
var userAge = prompt("Please enter your age:");
var messageElement = document.getElementById('verify');

if (userAge >= 65) {
    messageElement.innerHTML = "Free Friday Coffee Night for Seniors!";
    messageElement.style.backgroundColor = "#004A99"; // A darker background
    messageElement.style.color = "#FFFFFF"; // White
    messageElement.style.padding = "10px";
    messageElement.style.borderRadius = "5px";
    messageElement.style.fontSize = "1.2em"; // Large text
    messageElement.style.fontWeight = "bold";
} else {
    messageElement.innerHTML = "Enjoy Music and Make Memories!";
}