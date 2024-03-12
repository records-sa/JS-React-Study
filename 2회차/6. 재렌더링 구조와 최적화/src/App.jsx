import { useState } from 'react';
import { Child1 } from './Child1';
import { Child4 } from './Child4';

export const App = () => {
  console.log('App 렌더링');

  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  };

  return (
    <>
      <button onClick={onClickButton}>버튼</button>
      <p>{num}</p>
      <Child1 />
      <Child4 />
    </>
  );
};
