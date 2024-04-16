import React from 'react';
import loaderImage from '../asset/images/bouncing_football.gif';

const Loader = () => {
  return (
    <div className='w-[80%] m-auto'>
      <img src={loaderImage} alt="Loading..." className='items-center m-auto flex justify-center'/>
    </div>
  );
};

export default Loader;