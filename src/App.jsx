import { useState } from 'react';
import SimonGame from './components/SimonGame';
import Scoreboard from './components/Scoreboard';
import Instructions from './components/Instructions';

function App() {
  //refs
  const [highScore, setHighScore] = useState(0);

  return (
    <div className='bg-neutral-800 w-screen h-screen flex flex-col justify-between  text-white'>
      <Scoreboard highScore={highScore} />
      <SimonGame highScore={highScore} setHighScore={setHighScore} />
      <Instructions />
    </div>
  );
}

export default App;
