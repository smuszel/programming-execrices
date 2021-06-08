// import * as React from 'react';

// // eslint-disable-next-line import/no-anonymous-default-export
// export default () => {
//   const [value, setValue] = React.useState(0);

//   // Equivalent with React.useMemo(() => () => { ... }, [value])
//   const increment = React.useCallback(() => {
//     setValue(value + 1);
//   }, [value]);

//   React.useEffect(() => {
//     setValue(Number(localStorage.getItem('value')) || 0);

//     return () => {
//       const shouldReset = window.confirm('Reset?');
//       shouldReset && localStorage.clear();
//     };
//   }, []);

//   // Be aware that this effect will also trigger on mount
//   // If we put this before the above, we will intoroduce a subtle bug
//   React.useEffect(() => {
//     localStorage.setItem('value', value);
//   }, [value]);

//   return (
//     <button style={{ width: 100, height: 100 }} onClick={increment}>
//       {value}
//     </button>
//   );
// };
