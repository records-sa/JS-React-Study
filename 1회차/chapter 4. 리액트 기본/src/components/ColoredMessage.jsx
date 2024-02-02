import React from 'react';

const ColoredMessage = ({ color, children }) => {
  //   Props 분할 대입
  //   const { color, children } = props;

  const contentStyle = {
    color: color, // 생략 표기법 사용
    fontSize: '20px',
  };

  // props. 불필요
  return <p style={contentStyle}>{children}</p>;
};

export default ColoredMessage;
