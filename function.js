let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const userGuess = Number(document.getElementById('guess').value);
  const result = document.getElementById('resultText');
  attempts++;

  if (userGuess === secretNumber) {
    result.innerHTML = `🎉 Bahut badiya! Aapne ${attempts} tries me sahi number (${secretNumber}) dhoond liya!`;
    result.style.color = '#00ff00';
  } else if (userGuess > secretNumber) {
    result.innerHTML = "📉 Thoda kam sochiye.";
    result.style.color = '#ffcc00';
  } else if (userGuess < secretNumber) {
    result.innerHTML = "📈 Thoda zyada sochiye.";
    result.style.color = '#ffcc00';
  } else {
    result.innerHTML = "⚠ Koi galat input hai.";
    result.style.color = '#ff0000';
  }
}