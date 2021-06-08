import React from 'react';

const CounterContext = React.createContext({ value: 0, increment: () => {} });

const Counter = () => {
  const { value, increment } = React.useContext(CounterContext);
  return <button onClick={increment}>{value}</button>;
};

const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <CounterContext.Provider
      value={{ value: count, increment: () => setCount(count + 1) }}
    >
      <Counter />;
    </CounterContext.Provider>
  );
};

export default App;
