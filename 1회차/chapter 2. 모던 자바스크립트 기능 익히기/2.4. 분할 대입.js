// 분할 대입을 이용하지 않고 문자열을 출력
const myProfile = {
  name: '누시다',
  age: 24,
};

const message = `내 이름은 ${myProfile.name}입니다. 나이는 ${myProfile.age}세입니다.`;
console.log(message); // 내 이름은 누시다입니다. 나이는 24세입니다.

// 분할 대입 이용
const {name, age} = myProfile;

const message2 = `내 이름은 ${name}입니다. 나이는 ${age}세입니다.`;
console.log(message2); // 내 이름은 누시다입니다. 나이는 24세입니다.

// 일부만 추출
const {age} = myProfile;

// 순서를 바꾸어 추출
const {age, name} = myProfile;

// 추출한 속성에 별명 지정
const {name: myName, age: myAge} = myProfile;

const massage3 = `내 이름은 ${myName}입니다. 나이는 ${myAge}세입니다.`;
console.log(message3); // 내 이름은 누시다입니다. 나이는 24세입니다.

// 배열 인덱스를 지정해서 대입
const myProfile2 = ['누시다', 24];

const message4 = `내 이름은 ${myProfile2[0]}입니다. 나이는 ${myProfile2[1]}세입니다.`;
console.log(message4); // 내 이름은 누시다입니다. 나이는 24세입니다.

// 배열에 분할 대입
const [name2, age2] = myProfile2;

const message5 = `내 이름은 ${name2}입니다. 나이는 ${age2}세입니다.`;
console.log(message5); // 내 이름은 누시다입니다. 나이는 24세입니다.

// 배열에서 필요한 요소만 추출
const [name2] = myProfile2;
