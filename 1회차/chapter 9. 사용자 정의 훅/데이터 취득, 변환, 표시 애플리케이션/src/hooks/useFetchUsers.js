import { useState } from 'react';

export const userFetchUsers = () => {
  const [userList, setUserList] = useState([{id: 1}]);

  const onClickFetchUser () => alert('함수 실행')

  return {userList, onClickFetchUser}
}