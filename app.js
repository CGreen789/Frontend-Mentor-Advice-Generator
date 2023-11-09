// Fetching data from the API: https://api.adviceslip.com/

const getAdvice = () => {
const apiURL = 'https://api.adviceslip.com/advice'

fetch(apiURL)
.then(response => response.json())
.then(data => {
    const advice = data.slip.advice
    const adviceID = data.slip.id
    console.log(advice, adviceID)
    const adviceIDPlaceholder = document.querySelector("#advice-id")
    const advicePlaceholder = document.querySelector("#advice")
    advicePlaceholder.innerText = advice
    adviceIDPlaceholder.innerText = `ADVICE ${adviceID}`
})
}
// Fetch a new API call on button click
const diceButton = document.querySelector("#dice-button")
diceButton.addEventListener('click', () => getAdvice())



getAdvice();
