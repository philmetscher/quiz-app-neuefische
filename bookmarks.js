import { createCard, cards } from "./components/card/card.js";

const bookmarkCardContainer = document.querySelector(
  '[data-js="card-list-bookmark"]'
);

const bookmarkedCards = cards.filter((card) => card.isBookmarked);
bookmarkedCards.forEach((card) => {
  const newCard = createCard(card.question, card.answer, card.tags);
  bookmarkCardContainer.append(newCard);
  document
    .querySelector('[data-js="bookmark-button"]')
    .classList.add("bookmark--active");
});
