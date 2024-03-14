// 타입스크립트 기본
import { useState } from 'react';
// 기본적인 타입 종류
// string(문자열) 타입
// :string 으로 지정
let str: string = 'A';
str = '10'; // ok
str = 10; // ng

// number(수치) 타입
// :number 로 지정
let num: number = 0;
num = 10; // ok
num = '10'; // ng

// boolean(논릿값) 타입
// :boolean 으로 지정
let bool: boolean = true;
bool = false; // ok
bool = 10; // ng

// Array(배열) 타입
// :Array<타입명> 또는 :타입명[] 으로 지정
const arr1: Array<number> = [1, 2, 3];
let arr2: number[] = [1, 2, 3];
arr1.push(10); // ok
arr2.push(10); // ok
arr1.push('10'); // ng
arr2 = 10; // ng

// null 타입
// :null 로 지정
let null1: null = null;
null1 = null; // ok
null1 = 10; // ng

// undefined 타입
// :undefined 로 지정
let undefined1: undefined = undefined;
undefined1 = undefined; // ok
undefined1 = 10; // ng

// any 타입
// :any 로 지정
let any1: any;
any1 = false; // ok
any1 = 10; // ok
any1 = undefined; // ok

// 함수 타입 지정
// 함수 타입, void 타입
// :void로 지정
// 함수 타입은 (인수: 인수 타입명): 반환값의 타입명 => {}
const funcA = (num: number): void => {
  console.log(num);
};
funcA(10); // ok
funcA('10'); // ng
funcA(); // ng

// 객체 타입
// : { :타입명, :타입명 ... }으로 설정
const obj: { str: string; num: number } = {
  str: 'A',
  num: 10,
};
obj.str = 'B'; // ok
obj.num = 20; // ok
obj.str = 10; // ng
obj.num = null; // ng
obj = 10; // ng

// 복합 타입
// intersection(교차) 타입
// 타입 & 타입으로 지정
const obj: { str: string } & { num: number } = {
  str: 'A',
  num: 10,
};
obj.str = '20'; // ok
obj.num = 10; // ok

// 같은 타입 정의의 속성(str: string)이 존재하는 경우
type TypeA = { str: string; num: number };
type TypeB = { str: string; boolean: boolean };

// TypeA와 TypeB로부터 새로운 TypeC를 작성
type TypeC = TypeA & TypeB;

const obj: TypeC = {
  str: 'A',
  num: 10,
  bool: false,
};

// union(병합, 공용체) 타입
// 타입 | 타입으로 지정
let val1: string | number = '';
val1 = 'A'; // ok
val1 = 10; // ok
val1 = []; // ng

// Generic
// 타입 정의 예
type CustomType<T> = {
  val: T;
};

// CustomType 사용 방법
const strObj: CustomType<string> = { val: 'A' };

// string 이외의 값을 대입한 경우
// 다음과 같이 하면 에러가 발생한다
const strObj: CustomType<string> = { val: 10 };

// useState 정의 시 제네릭 이용
const [str, setStr] = useState<string>('');

// 값을 string 이외의 값으로 업데이트한 경우
// string 이외의 값으로 변경 할 수 없다
setStr(10); // ng
