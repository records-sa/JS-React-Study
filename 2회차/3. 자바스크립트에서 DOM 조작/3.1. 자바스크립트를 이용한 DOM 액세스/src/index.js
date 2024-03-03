// getElementById 사용
const title1 = document.getElementById("title");
console.log(title1);
// <h1 id="title">Hello World!</h1>

// querySelector 사용
const title2 = document.querySelector("#title");
console.log(title2);
// <h1 id="title">Hello World!</h1>

// 클래스명으로 엘리먼트 얻기
// getElementsByClassName 사용
const containers = document.getElementsByClassName("container");
console.log(containers);

// querySelector를 이용한 엘리먼트 얻기
// querySelector 사용
const container = document.querySelector(".container");
console.log(container);

// querySelectorAll을 이용한 엘리먼트 얻기
// querySelectorAll 사용
const containers2 = document.querySelectorAll(".container");
console.log(containers2);
