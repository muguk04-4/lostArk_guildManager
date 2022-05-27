//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';



function App() {

  let [nickName, setNickName] = useState('something');

  return (
    <div className="App">
      <div className='web-logo'>
        로스트아크 길드 매니저
      </div>

      <div className='login-form'>
        <input className='id' type='email' placeholder='이메일을 입력해주세요.'/>
        <input className='pw' type='password' placeholder='비밀번호를 입력해주세요.'/>
        <button className='btn'>확인</button>
      </div>

      <div>
        <button className='btn'>회원가입</button>
      </div>
    </div>
  );
}

export default App;
