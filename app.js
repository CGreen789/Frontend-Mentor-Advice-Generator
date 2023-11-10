// Fetching data from the API: https://api.adviceslip.com/

const getAdvice = () => {
  const apiURL = "https://api.adviceslip.com/advice";

  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      const advice = data.slip.advice;
      const adviceID = data.slip.id;
      
      const adviceIDPlaceholder = document.querySelector("#advice-id");
      const advicePlaceholder = document.querySelector("#advice");
      advicePlaceholder.innerText = `“${advice}”`;
      adviceIDPlaceholder.innerText = `ADVICE #${adviceID}`;
    });
};
// Fetch a new API call on button click
const diceButton = document.querySelector("#dice-button");
diceButton.addEventListener("click", () => getAdvice());

// Render different images depending on screen size
window.addEventListener("DOMContentLoaded", function () {
  const patternDivider = document.getElementById("pattern-divider");

  function updateImage() {
    if (window.innerWidth > 768) {
      patternDivider.src = "./images/pattern-divider-desktop.svg";
    } else {
      patternDivider.src = "./images/pattern-divider-mobile.svg";
    }
  }

  // Initial update on page load
  updateImage();

  // Update on window resize
  window.addEventListener("resize", updateImage);
});

getAdvice();
