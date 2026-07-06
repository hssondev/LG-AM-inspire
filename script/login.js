document.getElementById("loginForm").addEventListener('submit', function(e) {
 e.preventDefault();    // 폼의 기본제출 막기

 const username = document.getElementById("username").value.trim();
 const password = document.getElementById("password").value.trim();
 const message = document.getElementById("message");

 // 간단한 로그인 검증 로직 (임시)
 if (username === "admin" && password === "1234") {
    message.style.color = "green";
    message.textContent = "로그인 성공!";

    //예시 : 로그인 후 페이지 이동
    setTimeout(() => {
        window.location.href = "welcome.html"; // 로그인 성공 시 이동할 페이지
    }, 1000); // 1초 후에 이동 
 } else {
    message.style.color = "red";
    message.textContent = "아이디 또는 비밀번호가 잘못되었습니다.";
 }
});