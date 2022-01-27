const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME ="hidden"; 
const USERNAME_KEY = "username";

// 브라우저는 eventlistner를 만들고 이벤트를 동작시켰을 때
// {} 객체 형태의 인자와 함께  함수를 호출시켜준다.
function onLoginSubmit(event) {
    event.preventDefault(); // 특정 이벤트에 대해 브라우저의 기본 동작을 막아주는 함수
    loginForm.classList.add(HIDDEN_CLASSNAME);

    localStorage.setItem(USERNAME_KEY, loginInput.value);

    paintGreetings();
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername == null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings();
}
