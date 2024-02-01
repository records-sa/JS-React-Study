// div 생성
const divEl = document.createElement("div");
console.log(divEl); // <div></div>

// HTMLUnknownElement 생성
// 존재하지 않는 태그명을 지정
const nushidaEl = document.createElement("nushida");
console.log(nushidaEl); // <nushida></nushida>

// div 아래 p 태그 추가
// div 태그 생성
const divEl = document.createElement("div");

// p 태그 생성
const pEl = document.createElement("p");

// div 아래 p 태그 추가
divEl.appendChild(pEl);
console.log(divEl); // <div><p></p></div>

// div 아래 p 태그와 h2 태그를 추가
// div 태그 생성
const divEl = document.createElement("div");

// p 태그 생성
const pEl = document.createElement("p");

// h2 태그 생성
const h2El = document.createElement("h2");

// div 태그 아래 p 태그와 h2 태그 추가
divEl.appendChild(pEl);
divEl.appendChild(h2El);

console.log(divEl);
{
  /* <div>
<p></p>
<h2></h2>
</div> */
}

// div 아래 맨 앞에 p 태그와 h2 태그 추가
divEl.prepend(pEl);
divEl.prepend(h2El);

console.log(divEl);
{
  /* <div>
<h2></h2>
<p></p>
</div> */
}
