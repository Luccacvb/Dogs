import React from 'react';
import Photoget from './endpoints/Photoget';
import Photopost from './endpoints/Photopost';
import Tokenpost from './endpoints/Tokenpost';
import Userpost from './endpoints/Userpost';

const Api = () => {
  return (
    <div>
      <h2>USER POST</h2>
      <Userpost/>
      <h2>TOKEN POST</h2>
      <Tokenpost/>
      <h2>PHOTO POST</h2>
      <Photopost/>
      <h2>PHOTO GET</h2>
      <Photoget/>
    </div>
  );
};

export default Api;
