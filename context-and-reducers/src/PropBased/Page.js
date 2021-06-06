import React from 'react';
import Product from './Product';
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div style={{ margin: 20 }}>
      This is page of our shop with list of products
      <div style={{ marginTop: 10 }}>
        <Product price={50} />
        <Product price={100} />
      </div>
    </div>
  );
};
