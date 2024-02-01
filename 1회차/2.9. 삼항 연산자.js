// ?와 :을 이용한 처리 예
// 1은 0보다 크므로 true, 따라서 :의 왼쪽이 설정된다
const val1 = 1 > 0 ? 'true입니다' : 'false입니다';

console.log(val1); // true입니다

// 입력값에 대한 메시지 출력
// 수치를 변환해 출력하는 함수
const printFormattedNum = (num) => {
    const printFormattedNum = typeof num === 'number' ? num.toLocaleString() : '숫자를 입력 하십시오';
    console.log(printFormattedNum);
}

printFormattedNum(1300); // 1,300
printFormattedNum('1300'); // 숫자를 입력 하십시오

// 함수 return 부분에 삼항 연산자 이용
// 두 인수의 합이 100d을 넘는지 판정하는 함수
const checkSumOver100 = (num1, num2) => { 
    return num1 + num2 > 100 ? '100을 넘었습니다' : '허용 범위 안입니다';
}

console.log(checkSumOver100(40, 50)); // 허용 범위 안입니다
console.log(checkSumOver100(60, 50)); // 100을 넘었습니다