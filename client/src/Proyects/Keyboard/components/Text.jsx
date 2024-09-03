import React from 'react';

const Text = ({ some, textAreaRef, onChange }) => {
  
  return (
    <div className='container flex justify-center p-2'>
      <div className='w-[87.5%]'>
        <textarea 
          className='h-52 w-full rounded-lg border-none focus:border-none focus:outline-none text-3xl p-4'
          value={some} 
          ref={textAreaRef}
          onChange={onChange}
        />
      </div>
      
    </div>
  );
}

export default Text;