// 기존 함수 사용 예 1
// 기존 함수 정의
function func1(value) {
  return value;
}

// 실행한 결과 출력
console.log(func1('func1입니다')); // func1입니다

// 기존 함수 사용 예 2
// 함수를 정의하고 변수에 저장
const func2 = function (value) {
  return value;
};

// 실행한 결과를 출력
console.log(func2('func2입니다')); // func2입니다

// 화살표 함수
// 화살표 함수 정의
const func3 = (value) => {
  return value;
};

// 실행 결과 출력
console.log(func3('func3입니다')); // func3입니다

// 화살표 함수 생력 표기법
// 화살표 함수 정의(인수가 한 개이므로 소괄호 생략)
const func4 = value => {
    return value;
}

// 실행 결과 출력
console.log(func4('func4입니다')); // func4입니다

// 인수가 두 개 이상인 경우
// 인수가 두 개 이상이면 에러
const func5 = value1, value2 => {
    return value1 + value2;
}

// 인수가 두 개 이상이면 소괄호로 감싼다.
const func6 = (value1, value2) => {
    return value1 + value2;
}

// return 생략
// 처리를 한 행으로 반환하므로 {} 생략
const func7 = (num1, num2) => num1 + num2;

// 실행 결과 출력
console.log(func7(10, 20)); // 30

// 잘못된 return 생략
// {}로 감쌌지만 return을 이용하지 않았다.
cont func8 = (num1, num2) => {num1 + num2;}

// 실행 결과 출력(아무것도 반환되지 않는다.)
console.log(func8(10, 20)); // undefined

// ()을 이용해 한 행으로 모으기
// 괄호로 감싸서 모은 뒤 생략해서 반환
const func9 = (val1, val2) => (
    {
        name: val1, age: val2
    })

// 실행 결과 출력
console.log(func9('누시다', 24)); // {name: '누시다', age: 24}