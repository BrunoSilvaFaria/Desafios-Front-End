const button = document.querySelector(".share__conteiner");
const section = document.querySelector(".share__div");
const icon = document.querySelector(".share__icon");
const link = document.querySelectorAll(".icon");

button.addEventListener('click', function () {
     if (section.style.display === "none") {
          section.style.display = "flex";
          icon.style.color = "#edf1f8"
          button.style.background = "#6e8098"
     } else {
          section.style.display = "none";
          icon.style.color = "#6e8098";
          button.style.background = "#edf1f8";
     }
});

