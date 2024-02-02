// 직접 기술
return (
    <div style={{sidth: '100%', padding: '16px'}}>
        <p style={{color: 'blue', textAlign: 'center'}}>Hello World!</p>
    </div>
)

// 사전 정의 후 지정
const containerStyle = {
    width: '100%',
    padding: '16px'
};
const textStyle = {
    color: 'blue',
    textAlign: 'center'
}

return (
    <div style={containerStyle}>
        <p style={textStyle}>Hello World!</p>
    </div>
)