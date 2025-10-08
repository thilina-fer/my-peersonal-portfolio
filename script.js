// Theme toggle button functionality
const toggleBtn = document.getElementById("theme-toggle");
document.body.classList.toggle("dark-mode");
// setLogo("NiGHT");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Switch icon between light and dark
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️";
    setLogo("NiGHT");
  } else {
    toggleBtn.textContent = "🌙";
    setLogo("DAY");
  }
});

function setLogo(type) {
  const logo = document.getElementsByClassName("mylogo")[0];
  if (type === "DAY") {
    logo.setAttribute("src", "/assets/image/whiteBG.png");
  } else {
    logo.setAttribute("src", "/assets/image/blackBG.png");
  }
}
