
var userAge = prompt("Please enter your age:");
var messageElement = document.getElementById('verify');

if (userAge >= 65) {
    messageElement.innerHTML = "Free Friday Coffee Night for Seniors!";
    messageElement.style.backgroundColor = "#4CAF50"; // green background
    messageElement.style.color = "white"; 
    messageElement.style.padding = "10px";
    messageElement.style.borderRadius = "5px";
    messageElement.style.fontSize = "1.2em"; // larger text
    messageElement.style.fontWeight = "bold"; 
} else {
    messageElement.innerHTML = "Enjoy Music and Make Memories!";
}