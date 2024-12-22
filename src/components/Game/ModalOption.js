import React, { useState } from "react";
import { ModalBox } from "./styleModalOption";
import { KakaoShare } from "../Share/KakaoShare"

function ModalOption({ showModal, closeModal, onFinish }) {
  // 각 비교 항목과 선택된 항목 상태 관리
  const [selected, setSelected] = useState({
    coffee: null,
    drink: null,
    dessert: null,
  });

  // 선택된 항목을 업데이트하는 함수
  const handleSelect = (category, option) => {
    setSelected((prev) => ({
      ...prev,
      [category]: option,
    }));
  };

  // 완료 버튼 클릭 시 선택된 항목 출력
  const handleFinish = () => {
    onFinish(selected); // 부모 컴포넌트로 선택된 항목 전달
    KakaoShare(selected);
  };

  if (!showModal) return null; // 모달이 보여야 할 때만 렌더링

  const isAllSelected = selected.coffee && selected.drink && selected.dessert;

  return (
    <ModalBox>
        <h2 className="title">
            <img className="title-img"
                alt="loopy"
                src={require(`../../image/loopy-img-final.png`)}
                />
            <img className="title-text-bg" alt="loopy" src={require("../../image/speech-bubble-left.png")} />
            <span className="title-text">
                좀 더 자세히 말해줘!
            </span>
        </h2>
        <div className="modal">
        <div className="modal-content">

            <div className="button-grid">
            {/* 커피 vs 논커피 */}
            <div className="button-pair">
                <button
                    className={`modal-button ${selected.coffee === "커피" ? "selected" : ""}`}
                    onClick={() => handleSelect("coffee", "커피")}
                    >
                    커피
                </button>
                <button
                    className={`modal-button ${selected.coffee === "논커피" ? "selected" : ""}`}
                    onClick={() => handleSelect("coffee", "논커피")}
                    >
                    논커피
                </button>
            </div>

            {/* 아이스 vs 핫 */}
            <div className="button-pair">
                <button
                    className={`modal-button ${selected.drink === "아이스" ? "selected" : ""}`}
                    onClick={() => handleSelect("drink", "아이스")}
                    >
                    시원하게!
                </button>
                <button
                    className={`modal-button ${selected.drink === "핫" ? "selected" : ""}`}
                    onClick={() => handleSelect("drink", "핫")}
                    >
                    따뜻하게!
                </button>
            </div>

            {/* 음료 vs 디저트 */}
            <div className="button-pair">
                <button
                    className={`modal-button ${selected.dessert === "음료" ? "selected" : ""}`}
                    onClick={() => handleSelect("dessert", "음료")}
                    >
                    음료만!
                </button>
                <button
                    className={`modal-button ${selected.dessert === "디저트" ? "selected" : ""}`}
                    onClick={() => handleSelect("dessert", "디저트")}
                    >
                    디저트도!
                </button>
            </div>

            <button 
                onClick={handleFinish} 
                className={`modal-button complete-btn ${isAllSelected ? 'is-selected' : 'is-not-selected'}`} 
                disabled={!isAllSelected}
            >
                끝! 공유하기!
            </button>
            </div>

            <button onClick={closeModal} className="close-btn">닫기</button>
        </div>
        </div>
    </ModalBox>
  );
}

export default ModalOption;
