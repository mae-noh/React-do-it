import React, { useReducer } from 'react';

function reducer(state, action) {
    //action.type에 따라 다른 작업 수행
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 };
        case 'DECREMENT':
            return { value: state.value - 1 };
        default:
            return state;
    }
}

const Counter = () => {

    //const [number, setNumber] = useState(0);
    const [state, dispatch] = useReducer(reducer, { value: 0 });

    return (
        <div>
            <h2>현재 카운터 값은 {state.value}입니다.</h2>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
        </div>
    );

};

export default Counter;