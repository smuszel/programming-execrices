import * as React from 'react';
import IncButton from './Buttons/BasicButton';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [state, setState] = React.useState(false);
  return (
    <div style={{ display: 'flex' }}>
      <button onClick={() => setState(!state)} style={{ width: 100, height: 100 }}>
        {state ? 'unmount' : 'mount'} increment button
      </button>
      {state ? <IncButton /> : null}
    </div>
  );
};
