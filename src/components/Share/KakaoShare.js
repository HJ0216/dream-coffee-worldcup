export const KakaoShare = (selected) => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_JS_API_KEY);
      console.log("Kakao SDK initialized:", window.Kakao.isInitialized());
    }

    const drinkDescription = selected.drink === "아이스" ? "차가운" : "따뜻한";
    const coffeeDescription = selected.coffee === "커피" ? "아메리카노" : "차";
    const dessertDescription = selected.dessert === "음료" ? "디저트 빼고" : "디저트와 함께";
  
  
    // 공유할 데이터 설정
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "내가 어디서 어떤 커피를 먹고싶냐면..",
        description: `#${drinkDescription} #${coffeeDescription} #${dessertDescription} #적당한 #기프티콘을 #내놔라`,
        imageUrl: "https://raw.githubusercontent.com/HJ0216/dream-coffee-worldcup/main/src/image/loopy-img-share.jpg",
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
  