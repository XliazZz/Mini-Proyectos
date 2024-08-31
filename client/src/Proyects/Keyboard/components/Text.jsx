import React from 'react';

const Text = ({ some }) => {
  return (
    <div className='bg-red-300 flex justify-center p-2'>
      <div className='w-full max-w-7xl'>
        <textarea 
          className='h-52 w-full rounded-lg border-none focus:border-none focus:outline-none text-3xl p-4'
          value={some} 
          readOnly
        />
      </div>
    </div>
  );
}

export default Text;
