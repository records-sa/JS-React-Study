export const ColoredMessage = ({ color, children }) => {
  // props 분할 대입
  const { color, children } = props;

  const contentStyle = {
    color,
    fontSize: '20px',
  };

  return <p style={{ contentStyle }}>{children}</p>;
};
