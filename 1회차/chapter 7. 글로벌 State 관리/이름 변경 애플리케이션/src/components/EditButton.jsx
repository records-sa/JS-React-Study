import React, { useContext } from "react";
import { AdminFlagContext } from "./providers/AdminFlagProvider";

const style = {
  width: "100px",
  padding: "6px",
  borderRadius: "8px",
};

function EditButton(props) {
  // context 안의 isAdmin을 얻는다
  const { isAdmin } = useContext(AdminFlagContext);

  // isAdmin이 false일 때(관리자가 아닐 때) 버튼을 비활성화한다
  return (
    <button style={style} disable={!isAdmin}>
      수정
    </button>
  );
}

export default EditButton;
