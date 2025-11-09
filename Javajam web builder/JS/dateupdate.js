// dateupdate.js
document.addEventListener("DOMContentLoaded", () => {
    const dateElement = document.getElementById("dateupdate");
    if (dateElement) {
      dateElement.innerHTML = "This page was last modified on: " + document.lastModified;
    }
  });
  

  