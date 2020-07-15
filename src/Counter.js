import React, { useState } from 'react';

const Counter = () => {

    const [number, setNumber] = useState(0);

    return (
        <div>
            <h2>현재 카운터 값은 {number}입니다.</h2>
            <button onClick={() => setNumber(number + 1)}>+1</button>
            <button onClick={() => setNumber(number - 1)}>-1</button>
        </div>
    );

};

export default Counter;