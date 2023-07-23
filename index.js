const INITIAL_VALUE = 0;

let homeScore = INITIAL_VALUE;
let guestScore = INITIAL_VALUE;

const homeScoreElement = document.querySelector("#home-score");
const guestScoreElement = document.querySelector("#guest-score");

document.querySelectorAll(".score-actions.home button").forEach((element) => {
  element.addEventListener("click", (event) => {
    const num = Number.parseInt(event.target.textContent.split("").at(1), 10);

    homeScore += num;

    if (homeScore > 99) {
      return;
    }

    homeScoreElement.textContent = homeScore;
  });
});

document.querySelectorAll(".score-actions.guest button").forEach((element) => {
  element.addEventListener("click", (event) => {
    const num = Number.parseInt(event.target.textContent.split("").at(1), 10);

    guestScore += num;

    if (guestScore > 99) {
      return;
    }

    guestScoreElement.textContent = guestScore;
  });
});
