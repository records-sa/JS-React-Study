// string(문자열) 타입
// :string 으로 지정
let str: string = "A";
str = "10"; // ok
str = 10; // error

// number(숫자) 타입
// :number 로 지정
let num: number = 0;
num = 10; // ok
num = "10"; // error

// boolean(불린) 타입
// :boolean 으로 지정
let bool: boolean = true;
bool = false; // ok
bool = "true"; // error

// Array(배열) 타입
// :Array<타입명> 또는 :타입명[] 으로 지정
// 수치를 저장하는 배열인 경우
const arr1: Array<number> = [1, 2, 3];
let arr2: number[] = [1, 2, 3];
arr1.push(4); // ok
arr2.push(4); // ok
arr1.push("4"); // error
arr2 = 10; // error

// null 타입
// :null 로 지정
let null1: null = null;
null1 = null; // ok
null1 = 10; // error

// undefined 타입
// :undefined 로 지정
let undefined1: undefined = undefined;
undefined1 = undefined; // ok
undefined1 = 10; // error

// any 타입
// :any 로 지정
let any1: any;
any1 = false; // ok
any1 = 10; // ok
any1 = undefined; //ok

// 함수 타입, void 지정
// :void 로 지정
// 함수 타입은 (인수: 인수 타입명): 반환값의 타입명 => {}
const funcA = (num: number): void => {
  console.log(num);
};
funcA(10); // ok
funcA("10"); // error
funcA(); // error

// 객체 타입
// : {: 타입명, : 타입명 ...} 으로 설정
const obj: { str: string; num: number } = {
  str: "A",
  num: 10,
};
obj.str = "B"; // ok
obj.num = 20; // ok
obj.str = 10; // error
obj.num = null; // error
obj = 10; // error

// 복합 타입
// intersection(교차) 타입
// 타입 & 타입으로 지정
const obj: { str: string } & { num: number } = {
  str: "A",
  num: 10,
};
obj.str = "20"; // ok
obj.num = "10"; // error

// 같은 타입의 정의의 속성(str: string)이 존재하는 경우
type TypeA = {
  str: string;
  num: number;
};

type TypeB = {
  str: string;
  bool: boolean;
};

// TypeA와 TypeB로부터 새로운 TypeC를 작성
type TypeC = TypeA & TypeB;

const obj: TypeC = {
  str: "A",
  num: 10,
  bool: false,
};
