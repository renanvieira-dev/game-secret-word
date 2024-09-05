// CSS
import './global.css';
// React
import { useCallback, useEffect, useState } from 'react';
// Data
import { wordsList } from './data/words';
// Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const startGame = () => {
    setGameStage(stages[1].name);
  }

  return (
    <>
      { gameStage === "start" && <StartScreen startGame={startGame} /> }
      { gameStage === "game" && <Game /> }
      { gameStage === "end" && <GameOver /> }
    </>
  )
}

export default App;