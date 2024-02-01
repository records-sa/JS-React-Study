// button 태그 생성
const buttonEl = document.createElement("button");

// 버튼 라벨 설정
buttonEl.textContent = "버튼";

// 영역 1의 div 태그 얻기
const divEl = document.querySelector(".container");

// div 태그 아래에 button 태그 추가
divEl.appendChild(buttonEl);

// h1 태그 삭제
const h1El = document.querySelector("h1");

// body 태그 얻기
const bodyEl = document.querySelector("body");

// body 태그 아래부터 삭제
bodyEl.removeChild(h1El);

// body 아래 모두 삭제
// body 태그 얻기
const bodyEl = document.querySelector("body");

// body 태그 아래부터 삭제
bodyEl.textContent = null;
