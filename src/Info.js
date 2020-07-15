import React, { useState, useEffect } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        console.log('effect');
        console.log(name);
        return () => {
            console.log('cleanup');
            console.log(name);
        };
    }, []);

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                name="name"
                value={name}
                placeholder="이름을 입력하세요."
                onChange={onChangeName}
            />
            <input
                type="text"
                name="nickname"
                value={nickname}
                placeholder="닉네임을 입력하세요."
                onChange={onChangeNickname}
            />
            <h1>이름:{name} </h1>
            <h1>닉네임:{nickname}</h1>
        </div>
    );
};

export default Info;