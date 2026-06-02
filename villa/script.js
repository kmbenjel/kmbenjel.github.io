const buttons = document.querySelectorAll("[data-lang]");
const translated = document.querySelectorAll("[data-fr][data-ar]");

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.body.dir = lang === "ar" ? "rtl" : "ltr";

  translated.forEach((node) => {
    node.textContent = node.dataset[lang];
  });

  buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  localStorage.setItem("villa-language", lang);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
setLanguage(requestedLanguage || localStorage.getItem("villa-language") || "fr");
