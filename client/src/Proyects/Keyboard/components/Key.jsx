import React from 'react';

const Key = ({ lyric, onClick, mayusPressed, blockPressed, ctrlPressed }) => {
  const getStyle = (lyric) => {
    switch (lyric) {
      case 'Tab':
      case '| ?':
        return `
        lg:w-[70%] lg:text-left 
        xs:text-center
        sm:text-left
        `;
      case 'Block':
      case 'Enter':
        return `
        lg:w-[80%] lg:text-left 
        xs:text-center
        sm:w-{}
        `;
      case 'Delete':
        return `
        lg:w-[78%] lg:text-left 
        xs:text-center
        `;
      case 'Mayús':
      case 'Mayús ':
        return `
        lg:w-[90%]  lg:text-left 
        xs:text-center`;
      case 'Windows':
      case 'AltGr':
      case 'Alt':
      case 'Options':
        return `
        lg:w-[20%] lg:text-left lg:h-12 lg:text-transparent
        xs:h-[20px] xs:w-[50%] xs:text-center xs:text-transparent 
        `;
      case 'Ctrl':
      case 'Fn':
      case 'Ctrl ':
        return `
        lg:w-[20%] lg:text-left lg:h-12 
        xs:h-[20px] xs:text-center
        `;
      case 'Space':
        return 'lg:w-[100%] xs:w-[100%] lg:justify-center md:justify-center';
      default:
        return `
        lg:w-[38%] lg:h-14 lg:text-left flex uppercase 
        xs:h-[20px] xs:w-[12em] xs:text-center
        sm:w-[50%]
        `;
    }
  };

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

// export default Key;