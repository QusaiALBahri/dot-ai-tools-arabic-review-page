const scrollButtons = document.querySelectorAll("[data-scroll]");

for (const button of scrollButtons) {
  button.addEventListener("click", () => {
    const target = document.querySelector(button.dataset.scroll);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}
