// 변수 덮어 쓰기 및 재선언
var val1 = 'var 변수';
console.log(val1); // var 변수

// var 변수는 덮어 쓰기 가능
va1 = 'var 변수 덮어 쓰기';
console.log(val1); // var 변수 덮어 쓰기

// var 변수는 재선언 가능
var val1 = 'var 변수 재선언';
console.log(val1); // var 변수 재선언

// let으로 변수 덮어 쓰기
let val2 = 'let 변수';
console.log(val2); // let 변수

// let은 덮어 쓰기 가능
val2 = 'let 변수 덮어 쓰기';
console.log(val2); // let 변수 덮어 쓰기

// 재선언 실행
let val2 = 'let 변수 재선언'; // 에러

// const를 이용해 정의한 변수 덮어 쓰기
const val3 = 'const 변수';
console.log(val3); // const 변수

// const 변수는 덮어 쓰기 불가능
val3 = 'const 변수 덮어 쓰기'; // 에러

//const에서의 재선언
const val3 = 'const 변수 재선언'; // 에러

// 객체 속성값 변경 및 추가
// 객체 정의
const obj1 = { name: '누시다', age: 24 };
console.log(obj1); // { name: '누시다', age: 24 }

// 속성값 변경
obj1.name = 'Nushida';
console.log(obj1); // { name: 'Nushida', age: 24 }

// 속성 추가
obj1.address = 'Tokyo';
console.log(obj1); // { name: 'Nushida', age: 24, address: 'Tokyo' }

// 배열값 변경, 추가
// 배열 정의
const arr1 = ['dog', 'cat'];
console.log(arr1); // ['dog', 'cat']

// 첫 번째 값 변경
arr1[0] = 'bird';
console.log(arr1); // ['bird', 'cat']

// 값 추가
arr1.push('monkey');
console.log(arr1); // ['bird', 'cat', 'monkey']
