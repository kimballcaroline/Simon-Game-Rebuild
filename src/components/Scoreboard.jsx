/* eslint-disable react/prop-types */

const Scoreboard = (props) => {
  //props
  const { highScore } = props;

  return (
    <div className='m-4 bg-white text-neutral-800 p-4 rounded-md w-[200px] text-center'>
      High Score: {highScore}
    </div>
  );
};

export default Scoreboard;
