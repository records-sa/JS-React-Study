// 순수한 자바스크립트
// id = nushida를 가진 요소 아래에 Hello World!!라고 설정한 p 태그를 삽입한다.
var textElement = document.createElement("p");
textElement.textContent = "Hello World!!";
document.getElementById("nushida").appendChild(textElement);

// 제이쿼리
// id = nushida를 가진 요소 아래에 Hello World!!라고 설정한 p 태그를 삽입한다.
var textElement = $("<p>").text("Hello World!!");
$("#nushida").append(textElement);
