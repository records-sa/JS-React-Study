import { useState } from 'react';
import { ColoredMessage } from './components/ColoredMessage';

export const App = () => {
  // State 정의
  const [num, setNum] = useState(0);
  // 버튼 클릭 시 실행되는 함수 정의
  const onClickButton = () => {
    alert('버튼 클릭!');
    setNum(num + 1);
  };

  return (
    <div>
      <h1 style={{ color: 'red' }}>안녕하세요!</h1>
      <ColoredMessage color="blue">잘 지내시죠?</ColoredMessage>
      <ColoredMessage color="pink">잘 지냅니다!</ColoredMessage>
      <button onClick={onClickButton}>버튼</button>
      <p>클릭 횟수: {num}</p>
    </div>
  );
};
