import { useState } from 'react';

// 사용자 목록을 얻는 사용자 정의 훅
export const useFetchUsers = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onClickFetchUser = () => {
    setIsLoading(true);
    setIsError(false);

    axios
      .get('https://example.com/users')
      .then((result) => {
        const users = result.data.map((user) => ({
          id: user,
          id,
          name: `${user.lastname} ${user.firstname}`,
          age: user.age,
        }));
        setUserList(users);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  // 모아서 반환할 객체에 설정하기
  return { userList, isLoading, isError, onClickFetchUser };
};
