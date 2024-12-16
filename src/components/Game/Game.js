import React, { useState, useEffect, useMemo } from "react";
import { FlexBox } from "./style";
import ModalOption from "./ModalOption";
import JSConfetti from "js-confetti";

const items = [
    {
        brand: "투썸플레이스",
        src: require("../../image/a-twosome-place.png")
    },
    {
        brand: "엔제리너스",
        src: require("../../image/angel-in-us-coffee.png")
    },
    {
        brand: "바나프레소",
        src: require("../../image/banapresso.png")
    },
    {
        brand: "커피빈",
        src: require("../../image/coffee-bean.png")
    },
    // {
    //     brand: "컴포즈커피",
    //     src: require("../../image/compose-coffee.png")
    // },
    // {
    //     brand: "이디야",
    //     src: require("../../image/ediya.png")
    // },
    // {
    //     brand: "공차",
    //     src: require("../../image/gong-cha.png")
    // },
    // {
    //     brand: "할리스 커피",
    //     src: require("../../image/hollys-coffee.png")
    // },
    // {
    //     brand: "매머드 익스프레스",
    //     src: require("../../image/mammoth-express.png")
    // },
    // {
    //     brand: "메가MGC커피",
    //     src: require("../../image/mega-coffee.png")
    // },
    // {
    //     brand: "빽다방",
    //     src: require("../../image/paiks-coffee.png")
    // },
    // {
    //     brand: "파스쿠찌",
    //     src: require("../../image/pascucci.png")
    // },
    // {
    //     brand: "폴바셋",
    //     src: require("../../image/paul-bassett.png")
    // },
    // {
    //     brand: "스타벅스",
    //     src: require("../../image/starbucks.png")
    // },
    // {
    //     brand: "더벤티",
    //     src: require("../../image/the-venti-coffee.png")
    // },
    // {
    //     brand: "탐앤탐스",
    //     src: require("../../image/tom-n-toms-coffee.png")
    // },

]

const Game = () => {
    const [brands, setBrands] = useState([]);
    const [displays, setDisplays] = useState([]);
    const [winners, setWinners] = useState([]);
    const [finalWinner, setFinalWinner] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const jsConfetti = useMemo(() => new JSConfetti(), []);

    useEffect(() => {
        // 이펙트 로직 예시
        jsConfetti.addConfetti();
      }, [jsConfetti]); // 종속성 배열에 jsConfetti 포함

    const clickHandler = (brand) => {
        if (brands.length <= 2) {
            if (winners.length === 0) {
                setDisplays([brand]);
                setFinalWinner(true);
            } else {
                let updatedBrand = [...winners, brand];
                setBrands(updatedBrand);
                setDisplays([updatedBrand[0], updatedBrand[1]]);
                setWinners([]);
            }
            return;
        }
    
        setWinners([...winners, brand]);
        setDisplays([brands[2], brands[3]]);
        setBrands(brands.slice(2));
    };
    const handleImageClick = () => {
        if (finalWinner) {
            setShowModal(true);
        }
    };

    useEffect(() => {
        if (finalWinner) {
            jsConfetti.addConfetti({
                confettiColors: [
                    "#ff0a54", "#ff477e", "#ff7096", "#ff85a1", "#fbb1bd", "#f9bec7"
                ],
                confettiRadius: 5,
                confettiNumber: 500,
            });
        }
    }, [finalWinner]);
    
    useEffect(() => {
        const shuffledItems = [...items].sort(() => Math.random() - 0.5);
        setBrands(shuffledItems);
        setDisplays([shuffledItems[0], shuffledItems[1]]);
    }, [])

    return <FlexBox>
        <h1 className="title">
            <img
                className={`title-img ${finalWinner ? 'cursor-pointer' : ''}`} 
                alt="loopy"
                src={require(`../../image/${finalWinner ? 'loopy-img-mid' : 'loopy-img'}.png`)}
                onClick={handleImageClick}
                />
            <img className="title-text-bg" alt="loopy" src={require("../../image/speech-bubble-left.png")} />
            <span className="title-text">
                {finalWinner ? "나를 눌러줘!" : "커피 찾아 삼만리"}
            </span>
        </h1>

        {displays.map(d => {
            return (
                <div className="flex-1" key={d.brand} onClick={() => clickHandler(d)}>
                    <img alt="logo-img" className="logo-img" src={d.src}/>
                </div>
            );
        })}

        {showModal && (
            <ModalOption
                showModal={showModal}
                closeModal={() => setShowModal(false)}
                onFinish={(selected) => {
                console.log("선택된 항목:", selected);
                setShowModal(false);
                }}
            />
        )}

    </FlexBox>
}

export default Game;