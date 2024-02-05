import { useState } from 'react';
import { Child1 } from './components/Child1';
import { Child4 } from './components/Child4';

export const App = memo(() => {
  console.log('App 렌더링');

  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  };

  return (
    <div>
      <button onClick={onClickButton}>Button</button>
      <p>{num}</p>
      <Child1 />
      <Child4 />
    </div>
  );
})

