// 요소 전개
// 스프레드 구문
const arr1 = [1, 2];

console.log(arr1); // [1, 2]
console.log(...arr1); // 1 2

// 일반적인 함수와 스프레드 구문 비교
const arr2 = [1, 2];

const summaryFunc = (num1, num2) => console.log(num1 + num2);

// 일반적으로 배열값을 전달하는 경우
summaryFunc(arr2[0], arr2[1]); // 3

// 스프레드 구문을 이용하는 방법
summaryFunc(...arr2); // 3

// 요소 모으기
const arr3 = [1, 2, 3, 4, 5];

// 분할 대입 시 남은 요소를 '모은다'
const [num1, num2, ...arr3] = arr3;

console.log(num1); // 1
console.log(num2); // 2
console.log(arr3); // [3, 4, 5]

// 요소 복사와 결합
const arr4 = [10, 20];
const arr5 = [30, 40];

// 스프레드 구문을 이용해 새로운 배열 생성
// 스프레드 구문을 이용해 복사
const arr6 = [...arr4];

console.log(arr4); // [10, 20]
console.log(arr6); // [10, 20]

// 두개의 배열 결합
// 스프레드 구문을 이용해 결합
const arr7 = [...arr4, ...arr5];

console.log(arr7); // [10, 20, 30, 40]

// 여러 객체 결합
const obj4 = { val1: 10, val2: 20 };
const obj5 = { val3: 30, val4: 40 };

// 스프레드 구문을 이용해 복사
const obj6 = { ...obj4 };
// 스프레드 구문을 이용해 결합
const obj7 = { ...obj4, ...obj5 };

console.log(obj6); // {val1: 10, val2: 20}
console.log(obj7); // {val1: 10, val2: 20, val3: 30, val4: 40}

// 등호를 이용해서 복사하면 안되는 이유
// =를 이용한 복사
const arr8 = [10, 20];

// =로 복사
const arr9 = arr8;

console.log(arr8); // [10, 20]

// 복사할 때의 예상치 못한 작동
// arr8의 처음 요소를 100으로 덮어 씀
arr8[0] = 100;

console.log(arr9); // [100, 20]
console.log(arr8); // [100, 20]

// 스프레드 구문을 이용한 복사
// 스프레드 구문을 이용해서 복사
const arr10 = [...arr8];

// arr8의 처음 요소를 100으로 덮어 씀
arr8[0] = 100;

console.log(arr10); // [10, 20]
console.log(arr8); // [100, 20]
