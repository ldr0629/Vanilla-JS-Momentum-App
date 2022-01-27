# Vanilla-JS-Momentum-App
Vanilla Javascript를 사용한 Chrome Momentum App Clone Coding

[Momentum App](https://ldr0629.github.io/Vanilla-JS-Momentum-App/index.html)
--------------------------------------------------------------------

## greeting.js
- 유저명 입력 후 submit event 발생 시 localStorage에 유저 Key와 Value가 저장되고 화면에 유저명 출력
- 유저 정보 저장 여부에 따라 login-form, greeting의 hidden class가 적용되어 해당 태그의 디스플레이 제거

## clock.js
- Date 객체의 메서드를 이용해 시간 관련 정보 출력
- 매 번 일어나는 동작에 대해 setInterval 함수로 출력 주기 설정

## quote.js & background.js
- 배열을 통해 명언 및 배경 사진에 대한 데이터 저장 후, 무작위 접근하여 화면에 출력
- Math 내장 객체의 메서드인 floor(), random() 활용

## todo.js
- 사용자로부터 "해야할 일"을 입력받은 후 submit event가 발생하였을 때, 화면에 출력 후 localStorage에 객체를 문자열화하여 저장
- localStorage에 저장되어 있는 값의 존재 여부를 판별해 새로고침 시 화면에 출력
- "❌" 버튼 클릭 시 event가 발생한 객체의 부모 태그인 리스트 태그 제거
- "해야할 일"에 대한 정보가 담긴 toDos 배열 내 객체의 id와 삭제된 리스트 객체의 id와 비교해 필터링 후 localStorage에 저장


## weather.js
- OpenWeatherMap API 중 Current weather data의 geographic coordinates API를 Call하여 위도, 경도, API Key로 유저의 현재 위치, 날씨, 기온을 출력