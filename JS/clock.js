const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours =   String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 웹 페이지를 열었을 때 1초 후가 아닌 처음부터 시간이 나타나야 하므로 한 번은 직접 호출.
setInterval(getClock, 1000); // 매번 일어나는 동작을 setInterval로 설정하여 실시간 호출한다.