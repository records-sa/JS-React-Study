// 기존 for문
// 배열 정의
const nameArr = ["누시다", "사키오카", "고토"];

// for문을 이용한 배열 처리
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}
// 누시다
// 사키오카
// 고토

// map함수 이용 방법
// 배열.map() 1
// 배열 정의
const nameArr2 = ["누시다", "사키오카", "고토"];

// 배열.map()으로 이용한다
const nameArr3 = nameArr.map();

// 배열.map() 2
// 배열.map(함수)로 이용한다
const nameArr4 = nameArr.map(() => {});

// 배열.map() 3
// 인수(name)에 배열의 값이 설정되고 return으로 반환한다
const nameArr5 = nameArr.map((name) => {
  return name;
});

console.log(nameArr5); // ['누시다', '사키오카', '고토']

// map 함수 이용
// map을 이용한 배열 처리
nameArr.map((name) => console.log(name));
// 누시다
// 사키오카
// 고토

// filter 함수 이용 방법
// filter 함수를 이용해 홀수만 추출하기
// 배열 정의
const numArr = [1, 2, 3, 4, 5];

// 홀수(2로 나누어 나머지가 1)만 추출
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});

console.log(newNumArr); // [1, 3, 5]

// index 다루기
// for문의 index를 이용해 요소를 순서대로 추출
const nameArr6 = ["누시다", "사키오카", "고토"];

// 정의한 index를 이용
for (let index = 0; index < nameArr6.length; index++) {
  console.log(`${index + 1}번째는 ${nameArr[index]}입니다`);
}
// 1번째는 누시다입니다
// 2번째는 사키오카입니다
// 3번째는 고토입니다

// map 함수의 인수를 이용해 요소 순서대로 추출
// 두 번째 인수에 index를 넣는다
nameArr6.map((name, index) => console.log(`${index + 1}번째는 ${name}입니다`));
// 1번째는 누시다입니다
// 2번째는 사키오카입니다
// 3번째는 고토입니다

// map을 이용한 예시
// map을 이용한 사양 구현 예
const newNameArr = nameArr6.map((name) => {
  if (name === "누시다") {
    return name;
  } else {
    return `${name}님`;
  }
});

console.log(newNameArr); // ['누시다', '사키오카님', '고토님']
