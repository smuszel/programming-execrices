import React from 'react';
import BasketBadge from './BasketBadge';
import Balance from './Balance';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div style={{ display: 'flex' }}>
      There are <BasketBadge /> items in the cart with total cost of <Balance />
    </div>
  );
};
