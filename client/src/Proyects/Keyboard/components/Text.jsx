import React from 'react';

const Text = ({ some, textAreaRef, onChange, onClick }) => {
  return (
    <div className='container flex justify-center p-0 w-full'>
      <div className='
        lg:w-full
        md:w-full 
        sm:w-full 
        xs:w-full
      '>
        <textarea 
          className='lg:h-52 lg:w-full lg:text-3xl lg:p-4
          md:w-full md:h-40 text-[20px] md:p-3
          sm:w-full sm:h-32 sm:text-[16px] sm:p-2 
          xs:w-full xs:h-24 xs:text-sm xs:p-2 
          rounded-lg border-none focus:border-none focus:outline-none '
          value={some} 
          ref={textAreaRef}
          onChange={onChange}
          onClick={onClick}
          autoComplete='off'
        />
      </div>
    </div>
  );
}

export default Text;