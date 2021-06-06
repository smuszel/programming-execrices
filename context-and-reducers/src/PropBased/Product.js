import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ price }) => {
  return (
    <div>
      <span>Price: {price} €</span>
      <button style={{ marginLeft: 5 }}>Add to basket</button>;
    </div>
  );
};
