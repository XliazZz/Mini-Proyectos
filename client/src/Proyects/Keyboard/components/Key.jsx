import React from 'react';
import { getStyle } from '../logic/logic';

const Key = ({ lyric, onClick, mayusPressed, blockPressed, ctrlPressed }) => {
  const styles = getStyle(lyric);

  return (
    <button 
      onClick={onClick} 
      className={`${styles} 
        lg:h-14 lg:text-left lg:justify-start lg:my-[3px] lg:mx-[5px] lg:rounded-md lg:pl-1
        xs:mx-1 xs:flex xs:justify-center
        md:h-11 md:text-left md:justify-start md:pl-[5px] md:mx-[4px] md:rounded-sm md:m-[2px]
        container bg-none whitespace-nowrap  text-indigo-100 hover:bg-slate-800 hover:text-white disabled:text-transparent disabled:hover:bg-transparent font-Outfit outline-none outline-indigo-400 outline-offset-1`
      } 
      disabled={lyric === 'Windows' || lyric === 'Alt' || lyric === 'AltGr' || lyric === 'Options'}
    >
      <span className={
        (lyric === 'Mayús ' && mayusPressed) || 
        (lyric === 'Mayús' && mayusPressed) || 
        (lyric === 'Block' && blockPressed) || 
        (lyric === 'Ctrl' && ctrlPressed) || 
        (lyric === 'Ctrl ' && ctrlPressed) || 
        (ctrlPressed && ['x', 'c', 'v'].includes(lyric.toLowerCase())) ? 
        'lg:text-2xl xs:text-[9px] sm:text-sm sm:text-[16px] font-bold text-purple-600' : 
        'lg:text-2xl xs:text-[9px] sm:text-sm sm:text-[16px] font-semibold ' 
      }>
        {
          mayusPressed && lyric.length > 1 && lyric !== 'Tab' && lyric !== 'Block' && lyric !== 'Mayús' && lyric !== 'Ctrl' && lyric !== 'Windows' && lyric !== 'Alt' && lyric !== 'AltGr' && lyric !== 'Options' && lyric !== 'Enter' && lyric !== 'Delete'  && lyric !== 'Space' ? (
          <>
            {lyric.slice(0, -1)}
            <span className="text-purple-600 font-bold">{lyric.slice(-1)}</span>
          </>
        ) : (
          lyric
        )}
      </span>
    </button>
  );
};

export default Key;