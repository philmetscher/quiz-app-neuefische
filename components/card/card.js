function createCard(question, answer, tags) {
  const card = document.createElement("li");
  card.classList.add("card-list__item");

  card.innerHTML = `<article class="card">
    <h2 class="card__question" data-js="card-question">
    </h2>
    <button
      class="card__button-answer"
      type="button"
      data-js="answer-button"
    >
      Show answer
    </button>
    <p class="card__answer" data-js="card-answer"></p>
    <ul class="card__tag-list"></ul>
    <div class="card__button-bookmark">
      <button
        class="bookmark"
        aria-label="bookmark"
        type="button"
        data-js="bookmark-button"
      >
        <svg
          class="bookmark__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewbox="0 0 24 24"
        >
          <path
            d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </button>
    </div>
  </article>`;

  card.querySelector('[data-js="card-question"]').textContent = question;
  card.querySelector('[data-js="card-answer"]').textContent = answer;

  //QUESTION TAG LIST
  //collect all tags
  let questionTags;

  if (tags.indexOf(",")) {
    questionTags = tags.split(",");
  } else {
    questionTags = [tags];
  }

  //iterate through tag-list
  for (const questionTag of questionTags) {
    let listItem = document.createElement("li");
    listItem.classList.add("card__tag-list-item");
    listItem.textContent = "#" + questionTag;

    card.querySelector("ul.card__tag-list").append(listItem);
  }

  const answerButton = card.querySelector('[data-js="answer-button"]');
  const answerElement = card.querySelector('[data-js="card-answer"]');
  const bookmarkButton = card.querySelector('[data-js="bookmark-button"]');

  answerButton.addEventListener("click", () => {
    if (answerElement.classList.contains("card__answer--active")) {
      answerElement.classList.remove("card__answer--active");
      answerButton.textContent = "Show answer";
    } else {
      answerElement.classList.add("card__answer--active");
      answerButton.textContent = "Hide answer";
    }
  });

  bookmarkButton.addEventListener("click", () => {
    bookmarkButton.classList.toggle("bookmark--active");
  });

  return card;
}

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

export { createCard, cards };
