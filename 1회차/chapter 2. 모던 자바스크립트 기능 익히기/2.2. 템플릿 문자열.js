// 기존의 문자열과 변수 결합 방법
// 이름을 저장한 변수
const name = '누시다';

// 나이를 저장한 변수
const age = 24;

// '내 이름은 누시다입니다. 나이는 24세입니다.'라고 표시하는 경우
const message = '내 이름은 ' + name + '입니다. 나이는 ' + age + '세입니다.';
console.log(message); // 내 이름은 누시다입니다. 나이는 24세입니다.

// 템플릿 문자열 이용
const message2 = `내 이름은 ${name}입니다. 나이는 ${age}세입니다.`;
console.log(message2); // 내 이름은 누시다입니다. 나이는 24세입니다.

// 함수 호출과 계산 실행
// '안녕하세요!'를 반환하는 함수
function sayHello() {  
    return '안녕하세요!';
}

// 월을 나타내는 숫자를 저장한 변수
const month = 1;

// 템플릿 문자열 안에서 함수 호출 및 곱셈 실행
const message3 = `여러분 ${sayHello()}! 오늘부터 ${month * 3}월입니다.`;
console.log(message3); // 여러분 안녕하세요! 오늘부터 3월입니다.