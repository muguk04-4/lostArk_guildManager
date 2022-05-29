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
        <button className='signup-btn'>회원가입</button>
      </div>

      {/* 회원가입 길마,길원 선택 모달창  */}
      <div className='signup-select'>
        <button>길드 간부 가입</button>
        <button>길드원 가입</button>
        <button>취소</button>
      </div>
    </div>
  );
}

export default App;
