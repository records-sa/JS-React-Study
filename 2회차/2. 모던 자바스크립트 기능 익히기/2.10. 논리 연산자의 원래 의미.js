// 논리 연산자를 이용한 조건 분기
const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log("두 플래그 중 어느 하나는 true입니다");
}

if (flag1 && flag2) {
  console.log("두 플래그 모두 true입니다");
}
// 두 플래그 중 어느 하나는 true입니다

// 케이스 1: ||이용(null 설정)
const num = null;
const fee = num || "금액을 설정하지 않았습니다";

console.log(fee); // 금액을 설정하지 않았습니다

// 케이스 2: ||이용(100 설정)
const num2 = 100;
const fee2 = num2 || "금액을 설정하지 않았습니다";

console.log(fee2); // 100

// 케이스 3: &&이용(100 설정)
const num2 = 100;
const fee2 = num2 && "무언가가 설정되었습니다";

console.log(fee2); // 무언가가 설정되었습니다
