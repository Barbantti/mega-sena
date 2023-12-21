const express = require('express');
const random = require('lodash/random');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

function generateUniqueNumbers(existingNumbers) {
  const numbers = [];
  while (numbers.length < 6) {
    const randomNumber = random(0, 99);
    if (!numbers.includes(randomNumber) && !existingNumbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  return numbers;
}

app.get('/mega-sena', (req, res) => {
  const numberOfGames = 6;
  const games = [];
  for (let i = 0; i < numberOfGames; i++) {
    const game = generateUniqueNumbers(games.flat());
    games.push(game);
  }

  res.json(games);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
