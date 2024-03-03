// DOM 작성
// div 생성
const divEl = document.createElement("div");
console.log(divEl);
// <div></div>

// HTMLUnknownElement 생성
// 존재하지 않는 태그명을 지정
const nushidaEl = document.createElement("nushida");
console.log(nushidaEl);
// <nushida></nushida>

// DOM 추가
// div 아래 p 태그 추가
// div 태그 생성
const divEl2 = document.createElement("div");

// p 태그 생성
const pEl = document.createElement("p");

// div 태그 아래 p 태그 추가
divEl2.appendChild(pEl);
console.log(divEl2);
// <div><p></p></div>

// div 아래에 p 태그와 h2 태그를 추가
// div 태그 생성
const divEl3 = document.createElement("div");

// p 태그 생성
const pEl2 = document.createElement("p");

// h2 태그 생성
const h2El = document.createElement("h2");

// div 태그 아래 p 태그 추가
divEl3.appendChild(pEl2);
// div 태그 아래 h2 태그 추가
divEl3.appendChild(h2El);

console.log(divEl3);
// <div><p></p><h2></h2></div>

// div 아래 맨 앞에 p 태그와 h2 태그를 추가
// div 태그 생성
const divEl4 = document.createElement("div");

// p 태그 생성
const pEl3 = document.createElement("p");

// h2 태그 생성
const h2El2 = document.createElement("h2");

// div 태그 아래 p 태그 추가(맨 앞)
divEl4.prependChild(pEl3);
// div 태그 아래 h2 태그 추가(맨 앞)
divEl4.prependChild(h2El2);

console.log(divEl4);
// <div><h2></h2><p></p></div>
