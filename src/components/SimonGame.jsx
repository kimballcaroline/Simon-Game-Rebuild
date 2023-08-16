/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react';
import ColorBtn from './ColorBtn';

const colors = ['green', 'red', 'yellow', 'blue'];

const SimonGame = (props) => {
  //props
  const { highScore, setHighScore } = props;

  //state
  const [playing, setPlaying] = useState(false);
  const [sequence, setSequence] = useState([]);
  const [playingIdx, setPlayingIdx] = useState(0);

  //refs
  const greenRef = useRef(null);
  const redRef = useRef(null);
  const yellowRef = useRef(null);
  const blueRef = useRef(null);

  //functions
  const addNewColor = () => {
    const newColor = colors[Math.floor(Math.random() * 4)];
    setSequence([...sequence, newColor]);
  };

  const startGame = () => {
    if (!playing) {
      setPlaying(true);
      addNewColor();
    }
  };

  const resetGame = () => {
    setSequence([]);
    setPlaying(false);
    setPlayingIdx(0);
  };

  const handleColorClick = (e) => {
    if (playing) {
      e.target.classList.add('opacity-50');
      setTimeout(() => {
        e.target.classList.remove('opacity-50');
        const colorClicked = e.target.getAttribute('color');
        if (sequence[playingIdx] === colorClicked) {
          if (playingIdx === sequence.length - 1) {
            if (playingIdx + 1 > highScore) {
              setHighScore(playingIdx + 1);
            }

            setTimeout(() => {
              setPlayingIdx(0);
              addNewColor();
            }, 500);
          } else {
            setPlayingIdx(playingIdx + 1);
          }
        } else {
          resetGame();
        }
      }, 250);
    }
  };
  //adding comment to check in github

  //useEffect
  useEffect(() => {
    if (sequence.length > 0) {
      const showSequence = (idx = 0) => {
        let ref = null;
        if (sequence[idx] === 'green') ref = greenRef;
        if (sequence[idx] === 'red') ref = redRef;
        if (sequence[idx] === 'yellow') ref = yellowRef;
        if (sequence[idx] === 'blue') ref = blueRef;

        ref.current.classList.add('brightness-[2.5]');

        setTimeout(() => {
          ref.current.classList.remove('brightness-[2.5]');
          setTimeout(() => {
            if (idx !== sequence.length - 1) {
              showSequence(idx + 1);
            }
          }, 250);
        }, 250);
      };
      showSequence();
    }
  }, [sequence]);

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='relative'>
        <div>
          <ColorBtn
            bg={'bg-green-500'}
            border={'rounded-tl-full'}
            ref={greenRef}
            onClick={handleColorClick}
            color='green'
          />
          <ColorBtn
            bg={'bg-red-500'}
            border={'rounded-tr-full'}
            ref={redRef}
            onClick={handleColorClick}
            color='red'
          />
        </div>
        <div>
          <ColorBtn
            bg={'bg-yellow-500'}
            border={'rounded-bl-full'}
            ref={yellowRef}
            onClick={handleColorClick}
            color='yellow'
          />
          <ColorBtn
            bg={'bg-blue-500'}
            border={'rounded-br-full'}
            ref={blueRef}
            onClick={handleColorClick}
            color='blue'
          />
        </div>
      </div>
      <button
        className='absolute hover:brightness-125 bg-neutral-800 w-[175px] sm:w-[200px] h-[175px] sm:h-[200px] rounded-full '
        onClick={startGame}>
        {!playing ? 'Play' : `Round ${sequence.length}`}
      </button>
    </div>
  );
};

export default SimonGame;
