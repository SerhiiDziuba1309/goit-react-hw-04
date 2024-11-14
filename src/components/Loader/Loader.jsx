import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <ThreeDots type="ThreeDots" color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default Loader;
