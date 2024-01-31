// 메시지를 출력하는 함수
const sayHello = (name) => console.log(`${name}님, 안녕하세요!`);

sayHello('누시다'); // 누시다님, 안녕하세요!

// 실행 시 인수가 전달되지 않은 경우
sayHello(); // undefined님, 안녕하세요!

// 디폴트값 설정
const sayHello1 = (name = '게스트') => console.log(`${name}님, 안녕하세요!`);
sayHello1(); // 게스트님, 안녕하세요!
sayHello1('누시다'); // 누시다님, 안녕하세요!

// 존재하지 않는 속성을 출력
// name을 삭제
const myProfile3 = { age: 24 };

// 존재하지 않는 name
const {name} = myProfile3;

const message = `${name}님, 안녕하세요!`;
console.log(message); // undefined님, 안녕하세요!

// 분할 대입 시의 디폴트 값을 설정
const {name = '게스트'} = myProfile3;

const message1 = `${name}님, 안녕하세요!`;
console.log(message1); // 게스트님, 안녕하세요!
