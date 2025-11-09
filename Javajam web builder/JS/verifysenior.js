document.addEventListener("DOMContentLoaded", () => {
    let age = prompt("Welcome to JavaJam Music! Please enter your age:");
    const messageElement = document.getElementById("verify");
  
    if (!messageElement) return;
  
    if (age >= 65) {
      messageElement.innerHTML = "🎶 Free Friday Coffee Night for Seniors! ☕";
      messageElement.style.color = "#8C3826";
      messageElement.style.fontWeight = "bold";
    } else {
      messageElement.innerHTML = "Enjoy Music and Make Memories!";
      messageElement.style.color = "#231814";
    }
  });
  