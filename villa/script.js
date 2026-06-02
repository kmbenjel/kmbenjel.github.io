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
}

buttons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});
