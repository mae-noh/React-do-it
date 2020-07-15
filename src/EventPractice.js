import React, { useState } from 'react';

const EventPractice = () => {

    const [form, setForm] = useState({
        username: '',
        message: ''
    });

    const { username, message } = form;

    const onChange = e => {
        const nextForm = {
            ...form, //기존 폼을 복사
            [e.target.name]: e.target.value //원하는 값 덮어씌우기
        };
        setForm(nextForm);
    };

    const onClick = () => {
        alert(username + '님 ' + message);
        setForm({
            username: '',
            message: ''
        });
    };
    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={onChange}
            />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress} />
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default EventPractice;