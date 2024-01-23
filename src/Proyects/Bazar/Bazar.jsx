import { useEffect } from 'react';
import Landing from './views/Landing';

const Bazar = () => {
   
  useEffect(() => {
    return localStorage.removeItem('searchTerm');
  },[]);

  return (
    <div>
      <Landing />
    </div>
  )
}

export default Bazar;