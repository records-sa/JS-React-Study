import { useCallback, useState } from 'react';
import { Child1 } from './components/Child1';
import { Child4 } from './components/Child4';

export const App = memo(() => {
  console.log('App 렌더링');

  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  };

  const onClickReset = useCallback(() => {
    setNum(0);
  }, []);

  return (
    <div>
      <button onClick={onClickButton}>Button</button>
      <p>{num}</p>
      {/* props로 함수 설정 */}
      <Child1 onClickReset={onClickReset} />
      <Child4 />
    </div>
  );
});
