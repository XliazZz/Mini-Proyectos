import React from 'react';
import arrowUp from '../../../assets/keyboard/arrow-up-svgrepo-com.svg';
import arrowDown from '../../../assets/keyboard/arrow-down-svgrepo-com.svg';
import arrowLeft from '../../../assets/keyboard/arrow-left-svgrepo-com.svg';
import arrowRight from '../../../assets/keyboard/arrow-right-svgrepo-com.svg';
import windowsIcon from '../../../assets/keyboard/windows-10_icon-icons.com_66166.svg' 
import clickRight from '../../../assets/keyboard/text_indent_right_icon_159814.svg';
import deleteIcon from '../../../assets/keyboard/delete.svg';
import enter from '../../../assets/keyboard/enter-arrow_icon-icons.com_72766.svg';

const getColSpan = (lyric) => {
  switch (lyric) {
    case 'Delete':
    case 'Tab':
    case 'Mayús ':
      return 'col-span-2';

    case 'Enter':
      return 'col-span-2 row-span-2 col-start-15 ';

    case 'Block May':
      return 'col-span-3'; 

    case ' ':
      return 'col-span-6'; 
      
    default:
      return 'col-span-1'; 
  }
};

const getArrowImage = (lyric) => {
  switch (lyric) {
    case 'arrow up':
      return arrowUp;
    case 'arrow down':
      return arrowDown;
    case 'arrow left':
      return arrowLeft;
    case 'arrow right':
      return arrowRight;
    case 'Windows':
      return windowsIcon;
    case 'clickRight':
      return clickRight;
    case 'Delete':
      return deleteIcon;
    case 'Enter':
      return enter;
    default:
      return null;
  }
};


const Key = ({ lyric, onClick }) => {
  const colSpanClass = getColSpan(lyric);
  const arrowImage = getArrowImage(lyric);

  return (
    <button onClick={onClick} className={`flex items-center justify-center bg-violet-400 text-black rounded-md ${colSpanClass} p-1`}>
      {arrowImage ? 
        <img src={arrowImage} alt={lyric} />
        : <span className={lyric !== "Mayús" ? "text-3xl font-semibold" : "text-2xl font-semibold"}>{lyric}</span>
      }
    </button>
  );
};

export default Key;
