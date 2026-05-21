function filterAnimals(type) {
  let cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    if (type === "all") {
      card.style.display = "block";
    } else if (card.classList.contains(type)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
