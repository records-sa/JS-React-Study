// 스프레드 구문
const arr1 = [1, 2];
console.log(arr1); // [1, 2]
console.log(...arr1); // 1 2

// 일반적인 함수와 스프레드 구문 비교
const summaryFunc = (num1, num2) => console.log(num1 + num2);

// 일반저긍로 배열 값을 전달하는 경우
summaryFunc(arr1[0], arr1[1]); // 3

// 스프에드 구문을 이용하는 방법
summaryFunc(...arr1); // 3
