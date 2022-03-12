import React, { useRef, useState } from 'react';

const InputSample = () => {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  const { name, nickname } = inputs;
  const nameInput = useRef();
  // 값을 바꿔줄 함수
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  // 값 초기화해주는 함수
  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
  };
  console.log(nameInput);
  return (
    <>
      <div>
        <input
          name='name'
          placeholder='이름'
          onChange={onChange}
          value={name}
          ref={nameInput}
        />
        <input
          name='nickname'
          placeholder='닉네임'
          onChange={onChange}
          value={nickname}
        />
        <button onClick={onReset}>초기화</button>
        <div>
          값 : {name}({nickname})
        </div>
      </div>
    </>
  );
};

export default InputSample;
