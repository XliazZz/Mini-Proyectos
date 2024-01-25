import { useEffect } from 'react';
import Landing from './views/Landing';

const Bazar = () => {
   
  useEffect(() => {
    return localStorage.removeItem('searchTerm');
  },[]);

  return (
    <div className='bg-gray-950'>
      <Landing />
    </div>
  )
}

export default Bazar;