// 속성명과 변수명이 같은 경우 1
const name = "누시다";
const age = 24;

// user 객체 정의(속성은 name과 age)
const user = {
  name: name,
  age: age,
};

console.log(user); // { name: '누시다', age: 24 }

// 속성명과 변수명이 같은 경우 2
const user2 = {
  name,
  age,
};
