import { useContext, useState } from 'react';
import { Card } from './components/Card';
import { AdminFlagContext } from './components/providers/AdminFlagProvider';

export const App = () => {
  // Context 안의 isAdmin과 업데이트 함수를 얻는다
  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);

  // [전환] 클릭 시
  const onClickSwitch = () => setIsAdmin(!isAdmin);

  return (
    <div>
      {isAdmin ? <span>관리자 입니다</span> : <span>관리자가 아닙니다</span>}
      <button onClick={onClickSwitch}>전환</button>
      <Card isAdmin={isAdmin} />
    </div>
  );
};
