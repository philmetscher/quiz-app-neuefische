import { createCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-list"]');

const cards = [
  {
    question:
      "In the Kingdom Heart series who provides the english voice for Master Eraqus?",
    answer: "Mark Hamill",
    tags: "kingdomheart,mastereraqus,english voices",
  },
  {
    question:
      "Daniel Radcliffe became a global star in the film industry due to his performance in which film franchise?",
    answer: "Harry Potter",
    tags: "danielradcliffe,hewhomustnotbenamed,abracadabra",
  },
  {
    question:
      'Which former US president was nicknamed "Teddy" after he refused to shoot a defenseless black bear?',
    answer: "Theodore Roosevelt",
    tags: "usa,president,teddybear",
  },
];

cards.forEach((card) => {
  const newCard = createCard(card.question, card.answer, card.tags);
  cardContainer.append(newCard);
});

const answerButton = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="card-answer"]');
const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');

answerButton.addEventListener("click", () => {
  if (answer.classList.contains("card__answer--active")) {
    answer.classList.remove("card__answer--active");
    answerButton.textContent = "Show answer";
  } else {
    answer.classList.add("card__answer--active");
    answerButton.textContent = "Hide answer";
  }
});

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});
