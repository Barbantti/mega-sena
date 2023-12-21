import React, { useState } from 'react';
import './App.css';

function App() {
  const [listsOfUniqueNumbers, setListsOfUniqueNumbers] = useState([]);
  const [buttonText, setButtonText] = useState('Gerar Jogos');

  const apiUrl = 'http://localhost:3001/mega-sena';

  const generateNumbers = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setListsOfUniqueNumbers(data);
        setButtonText('Gerar Novos Jogos');
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  console.log('listsOfUniqueNumbers', listsOfUniqueNumbers);

  return (
    <div className="App">
      <h1>Mega da Virada</h1>
      <button onClick={generateNumbers}>{buttonText}</button>
      {listsOfUniqueNumbers.map((game, gameIndex) => (
        <div key={gameIndex}>
          <p>{`Jogo ${gameIndex + 1}: ${game.join(', ')}`}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
