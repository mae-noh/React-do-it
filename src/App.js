import React, { useState } from 'react';
//import Say from './Say';
//import EventPractice from './EventPractice';
//import IterationSample from './IterationSample';
import Counter from './Counter';
//import Info from './Info';

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => { setVisible(!visible) }}>
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Counter />}
    </div>
  );
};

export default App;