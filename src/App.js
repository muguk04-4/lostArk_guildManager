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
    </div>
  );
}

export default App;
