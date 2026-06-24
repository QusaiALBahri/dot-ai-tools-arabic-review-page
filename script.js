const searchInput = document.getElementById("toolSearch");
const cards = Array.from(document.querySelectorAll(".tool-card"));
const resultsCount = document.getElementById("resultsCount");

function updateResults(query) {
  const normalized = query.trim().toLowerCase();
  let visibleCount = 0;

  cards.forEach((card) => {
    const name = (card.dataset.name || "").toLowerCase();
    const tags = (card.dataset.tags || "").toLowerCase();
    const content = card.textContent.toLowerCase();
    const matches =
      normalized === "" ||
      name.includes(normalized) ||
      tags.includes(normalized) ||
      content.includes(normalized);

    card.classList.toggle("is-hidden", !matches);
    if (matches) visibleCount += 1;
  });

  resultsCount.textContent = `${visibleCount} أدوات ظاهرة`;
}

searchInput.addEventListener("input", (event) => {
  updateResults(event.target.value);
});

updateResults("");
