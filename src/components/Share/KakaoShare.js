export const KakaoShare = () => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_JS_API_KEY);
      console.log("Kakao SDK initialized:", window.Kakao.isInitialized());
    }
  
    // 공유할 데이터 설정
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "내가 선택한 카페 메뉴!",
        description: "커피와 디저트를 나만의 취향으로 선택했어요!",
        imageUrl: "https://your-image-url.com/sample.jpg", // 대표 이미지 URL
        link: {
          mobileWebUrl: "https://hj0216.netlify.app", // 모바일 웹 URL
          webUrl: "https://hj0216.netlify.app",       // PC 웹 URL
        },
      },
      buttons: [
        {
          title: "자세히 보기",
          link: {
            mobileWebUrl: "https://hj0216.netlify.app",
            webUrl: "https://hj0216.netlify.app",
          },
        },
      ],
    });
  };
  