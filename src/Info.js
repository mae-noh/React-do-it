import React from 'react';
import useInputs from './useInputs';

const Info = () => {

    // const [state, dispatch] = useReducer(reducer, {
    //     name: '',
    //     nickname: ''
    // });

    const [state, onChange] = useInputs({
        name: '',
        nickname: ''
    });

    const { name, nickname } = state;

    // const onChange = e => {
    //     dispatch(e.target);
    // }

    return (
        <div>
            <input
                type="text"
                name="name"
                value={name}
                placeholder="이름을 입력하세요."
                onChange={onChange}
            />
            <input
                type="text"
                name="nickname"
                value={nickname}
                placeholder="닉네임을 입력하세요."
                onChange={onChange}
            />
            <h1>이름:{name} </h1>
            <h1>닉네임:{nickname}</h1>
        </div>
    );
};

export default Info;