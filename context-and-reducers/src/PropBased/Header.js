import React from 'react';
import Basket from './Basket';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '25',
        background: 'beige',
        justifyContent: 'space-between',
      }}
    >
      This is header with the basket
      <Basket />
    </div>
  );
};
