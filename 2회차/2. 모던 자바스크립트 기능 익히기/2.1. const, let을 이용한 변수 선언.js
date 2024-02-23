// var를 이용한 변수 선언의 문제점
// 변수 덮어 쓰기 및 재선언
var val1 = "var 변수";
console.log(val1); // var 변수

// var 변수는 덮어 쓰기 가능
val1 = "var 변수 덮어 쓰기";
console.log(val1); // var 변수 덮어 쓰기

// var 변수는 재선언 가능
var var1 = "var 변수 재선언";
console.log(var1); // var 변수 재선언

// let을 이용한 변수 선언
// let으로 변수 덮어 쓰기
let val2 = "let 변수";
console.log(val2); // let 변수

// let은 덮어 쓰기 가능
val2 = "let 변수 덮어 쓰기";
console.log(val2); // let 변수 덮어 쓰기

// let은 재선언 불가능
let val2 = "let 변수 재선언"; // SyntaxError: Identifier 'val2' has already been declared

// const를 이용한 변수 선언
// const를 이용해 정의한 변수 덮어 쓰기
const val3 = "const 변수";
console.log(val3); // const 변수

// const 변수는 덮어 쓰기 불가능
val3 = "const 변수 덮어 쓰기"; // TypeError: Assignment to constant variable.

// const 변수는 재선언 불가능
const val3 = "const 변수 재선언"; // SyntaxError: Identifier 'val3' has already been declared

// const로 정의한 변수를 변경할 수 있는 예
// 객체 속성값 변경 및 추가
// 객체 정의
const obj1 = {
  name: "누시다",
  age: 24,
};
console.log(obj1); // { name: '누시다', age: 24 }

// 속성값 변경
obj1.name = "Nushida";
console.log(obj1); // { name: 'Nushida', age: 24 }

// 속성 추가
obj1.address = "Tokyo";
console.log(obj1); // { name: 'Nushida', age: 24, address: 'Tokyo' }

// 배열값 변경, 추가
// 배열 정의
const arr1 = ["dog", "cat"];
console.log(arr1); // ['dog', 'cat']

// 첫 번째 값 변경
arr1[0] = "bird";
console.log(arr1); // ['bird', 'cat']

// 값 추가
arr1.push("monkey");
console.log(arr1); // ['bird', 'cat', 'monkey']
