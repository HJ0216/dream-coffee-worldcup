# 🏆커피 월드컵🏆
커피 월드컵은 좋아하는 커피 브렌드와 옵션을 선택하여 카카오톡 공유하기를 통해, 친구에게 원하는 기프티콘을 요청할 수 있는 사이트입니다.

* [***커피 월드컵으로 친구에게 기프티콘 요청하기..👉👈***](https://hj0216.netlify.app/)
* **제작 기간**: 2024.12.14 - 2025.12.25
* 📺**시연 영상**
<div style="display: flex; justify-content: space-around; align-items: center;">
  <img src="https://github.com/user-attachments/assets/f45c3c9a-ff35-45dc-a5a9-a1a94eed0860" alt="동영상 이미지" width="64%" />
  <img src="https://github.com/user-attachments/assets/9d3eb28c-72da-432e-92f1-8937c69a728b" alt="일반 이미지" width="30%" />
</div>

</br>

## 📜사용 기술
* React 19.0.0


## 🌐배포
* Netlify


## 💻작업 환경(IDE)
* Visual Studio Code

</br>

### 🖥️로컬 환경에서 프로젝트 설치와 실행 방법
1. 프로젝트 Clone
```bash
git clone https://github.com/HJ0216/dream-coffee-worldcup.git
cd dream-coffee-worldcup
```

2. npm 라이브러리 설치
```bash
npm install styled-component
npm install react-router-dom
npm install js-confetti
```

3. 카카오 API Key 설정
프로젝트 최상위 폴더에 .env 파일 생성 및 카카오 API Key 설정
```bash
REACT_APP_KAKAO_JS_API_KEY = "PERSONAL_KAKAO_API_KEY"
```

4. 실행
```bash
npm start
```


### 🗒️커밋 메시지 규칙
```txt
✨Feat: 기능 추가
🐛Fix: 버그 수정
📝Docs: README.md 등 문서 수정 및 추가
🎨Style: 코드 포매팅, 함수명 수정 등
💄design: 사용자 UI 디자인 변경
✅Test: 테스트 코드 관련
♻️Refactor: 코드 리팩토링
🧹Chore: 기타 자잘한 수정
🚚rename: 파일 혹은 폴더명을 수정만 한 경우
🔥remove: 파일을 삭제만 한 경우
```


### 📂폴더 구조
```txt
📦src
 ┣ 📂assets
 ┃ ┗ 📂images
 ┃ ┃ ┣ 📂brands
 ┃ ┃ ┗ 📂etc
 ┣ 📂components
 ┣ 📂pages
 ┣ 📂styles
 ┣ 📜App.js
 ┗ 📜index.js
```