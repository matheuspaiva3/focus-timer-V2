let lightMode = true;

const toggleMode = document.getElementById("toggle-mode");

toggleMode.addEventListener("click", (event) => {
  document.documentElement.classList.toggle("dark");
  const mode = lightMode ? "dark" : "light";

  event.currentTarget.querySelector(
    "span"
  ).textContent = `Switch to ${mode} mode`;

  lightMode = !lightMode
});
