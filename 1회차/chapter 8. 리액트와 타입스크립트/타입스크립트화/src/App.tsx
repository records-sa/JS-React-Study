import { useEffect } from "react";
import axios from "axios";
import { ListItem } from "./components/ListItem";

// 사용자 정보 타입 정의
type User = {
  id: number;
  name: string;
  age: number;
  personalColor: string;
};

export const App = () => {
  // 얻은 사용자 정ㅂ도
  const [users, setUsers] = useState<User[]>([]);

  // 화면에 표시될 때 사용자 정보 얻기
  useEffect(() => {
    axios.get<User[]>("https://example.com/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <ListItem
          id={user.id}
          name={user.name}
          age={user.age}
          personalColor={user.personalColor}
        />
      ))}
    </div>
  );
};
