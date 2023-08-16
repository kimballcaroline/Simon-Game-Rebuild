/* eslint-disable react/prop-types */
import { forwardRef } from 'react';

const ColorBtn = forwardRef(({ bg, border, onClick, color }, ref) => (
  <button
    className={`${bg} ${border} w-[175px] sm:w-[200px] h-[175px] sm:h-[200px] m-2 hover:scale-105`}
    ref={ref}
    onClick={onClick}
    color={color}></button>
));

ColorBtn.displayName = 'ColorBtn';
export default ColorBtn;
