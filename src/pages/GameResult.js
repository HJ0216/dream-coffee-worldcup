import React, { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { ResultBox, ImageContainer, TitleImage, BrandImage } from "../styles/styleGameResult";
import { KakaoShare } from "../components/KakaoShare"
import JSConfetti from "js-confetti";

const items = [
    { brand: "투썸플레이스", src: require("../assets/images/brands/a-twosome-place.png") },
    { brand: "엔제리너스", src: require("../assets/images/brands/angel-in-us-coffee.png") },
    { brand: "바나프레소", src: require("../assets/images/brands/banapresso.png") },
    { brand: "커피빈", src: require("../assets/images/brands/coffee-bean.png") },
    { brand: "컴포즈커피", src: require("../assets/images/brands/compose-coffee.png") },
    { brand: "이디야", src: require("../assets/images/brands/ediya.png") },
    { brand: "공차", src: require("../assets/images/brands/gong-cha.png") },
    { brand: "할리스 커피", src: require("../assets/images/brands/hollys-coffee.png") },
    { brand: "매머드 익스프레스", src: require("../assets/images/brands/mammoth-express.png") },
    { brand: "메가MGC커피", src: require("../assets/images/brands/mega-coffee.png") },
    { brand: "빽다방", src: require("../assets/images/brands/paiks-coffee.png") },
    { brand: "파스쿠찌", src: require("../assets/images/brands/pascucci.png") },
    { brand: "폴바셋", src: require("../assets/images/brands/paul-bassett.png") },
    { brand: "스타벅스", src: require("../assets/images/brands/starbucks.png") },
    { brand: "더벤티", src: require("../assets/images/brands/the-venti-coffee.png") },
    { brand: "탐앤탐스", src: require("../assets/images/brands/tom-n-toms-coffee.png") }
];

const GameResult = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const selected = {
        coffee: searchParams.get("coffee"),
        drink: searchParams.get("drink"),
        dessert: searchParams.get("dessert"),
    };
    const brand = searchParams.get("brand");
    const jsConfetti = useMemo(() => new JSConfetti(), []);

    const isAnyFieldEmpty = !selected.drink || !selected.coffee || !selected.dessert || !brand;

    // 이모지 값 설정
    const getDrinkEmoji = (drink) => {
        if (drink === "아이스") return "🧊";
        if (drink === "핫") return "🔥";
        return "❓"; // 기본값
    };

    const getCoffeeEmoji = (coffee) => {
        if (coffee === "커피") return "☕";
        if (coffee === "논커피") return "🫖";
        return "❓"; // 기본값
    };

    const getDessertEmoji = (dessert) => {
        if (dessert === "디저트") return "🍰";
        if (dessert === "음료") return "🍹";
        return "❓"; // 기본값
    };

    const drinkEmoji = getDrinkEmoji(selected.drink);
    const coffeeEmoji = getCoffeeEmoji(selected.coffee);
    const dessertEmoji = getDessertEmoji(selected.dessert);

    const selectedBrand = items.find(item => item.brand === brand);

    useEffect(() => {
        jsConfetti.addConfetti({
            emojis: [drinkEmoji, coffeeEmoji, dessertEmoji],
            emojiSize: 20,
            confettiNumber: 300,
        });
    }, [jsConfetti, drinkEmoji, coffeeEmoji, dessertEmoji, selectedBrand]);

    const handleShare = () => {
        KakaoShare(selected, selectedBrand.brand);
    };
    

    return (
    <ResultBox>
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>{isAnyFieldEmpty ? "결과가 이상한데?" : "이거로군!"}</h1>
            <ImageContainer>
                <TitleImage alt="title-loopy-img" src={require("../assets/images/etc/loopy-img-result.png")} />
                <BrandImage alt="selected-brand-img" src={selectedBrand ? selectedBrand.src : require("../assets/images/etc/question-mark.png")} />
            </ImageContainer>
            <button className="basic-button share-btn" onClick={handleShare}>친구에게 알려주기!</button>
        </div>
      </ResultBox>
    );
  };

export default GameResult;