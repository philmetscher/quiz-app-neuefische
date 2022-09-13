import { createCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-list"]');
const bookmarkCardContainer = document.querySelector(
  '[data-js="card-list-bookmark"]'
);

const cards = [
  {
    question:
      "In the Kingdom Heart series who provides the english voice for Master Eraqus?",
    answer: "Mark Hamill",
    tags: "kingdomheart,mastereraqus,english voices",
    isBookmarked: true,
  },
  {
    question:
      "Daniel Radcliffe became a global star in the film industry due to his performance in which film franchise?",
    answer: "Harry Potter",
    tags: "danielradcliffe,hewhomustnotbenamed,abracadabra",
    isBookmarked: false,
  },
  {
    question:
      'Which former US president was nicknamed "Teddy" after he refused to shoot a defenseless black bear?',
    answer: "Theodore Roosevelt",
    tags: "usa,president,teddybear",
    isBookmarked: false,
  },
];

if (cardContainer) {
  cards.forEach((card) => {
    const newCard = createCard(card.question, card.answer, card.tags);
    cardContainer.append(newCard);
  });
}

if (bookmarkCardContainer) {
  const bookmarkedCards = cards.filter((card) => card.isBookmarked);
  bookmarkedCards.forEach((card) => {
    const newCard = createCard(card.question, card.answer, card.tags);
    bookmarkCardContainer.append(newCard);
    document
      .querySelector('[data-js="bookmark-button"]')
      .classList.add("bookmark--active");
  });
}
