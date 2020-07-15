import React, { useState } from 'react';
//import Say from './Say';
//import EventPractice from './EventPractice';
//import IterationSample from './IterationSample';
//import Counter from './Counter';
//import Info from './Info';
import Average from './Average';

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => { setVisible(!visible) }}>
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Average />}
    </div>
  );
};

export default App;