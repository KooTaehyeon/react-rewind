import React from 'react';

const CreateUser = ({ username, email, onChange, onCreate }) => {
  return (
    <div>
      <input
        placeholder='계정명'
        onChange={onChange}
        value={username}
        name={'username'}
      />
      <input
        placeholder='이메일'
        onChange={onChange}
        value={email}
        name='email'
      />
      <button onClick={onCreate}>버튼</button>
    </div>
  );
};

export default React.memo(CreateUser);
