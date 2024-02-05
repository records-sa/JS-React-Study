import React from "react";
import EditButton from "./EditButton";

const style = {
  width: "300px",
  height: "200px",
  margin: "8px",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

function Card() {
  // props로 관리자 플래그를 받는다
  const { isAdmin } = props;

  return (
    <div style={style}>
      <p>야마다 타로</p>
      <EditButton isAdmin={isAdmin} />
    </div>
  );
}

export default Card;
