import styled from "styled-components";

export const ModalBox = styled.div`
    html, body {
        width: 100%;
        height: 100%;
        overflow: hidden;
        transform: rotate(0deg); /* 기본 회전 */
    }

    .title {
        position: absolute;
        top: -70px;
        left: 30px;
    }

    /* 제목 이미지 및 텍스트 조정 */
    .title-img {
        height: 100px;
        width: 100px;
        border-radius: 50%;
        object-fit: cover;
        background: white;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .title-text-bg {
        position: absolute;
        width: 85%;
        height: 55%;
        top: 51%;
        left: 72%;
        transform: translate(-50%, -50%);
        z-index: -1;
    }

    .title-text {
        padding: 10px;
        font-size: 1.5rem;
        font-weight: bold;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
        position: relative;
        z-index: 1;
    }

    /* 모달 배경 */
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3); /* 반투명한 배경 */
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100; /* 모달이 최상단에 오도록 설정 */
    }

    /* 모달 콘텐츠 */
    .modal-content {
        background: linear-gradient(to bottom, #f0f0f0, #d9e4f5);
        padding: 170px 50px 20px; /* 위쪽 패딩을 더 늘려 여유 공간 확보 */
        border-radius: 10px;
        width: 40%;
        max-width: 400px;
        text-align: center;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        position: relative;
    }

    /* 제목 스타일 */
    .modal-content h2 {
        font-size: 1.5em;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    /* 버튼 그리드 */
    .button-grid {
        display: grid;
        gap: 10px;
        margin-bottom: 10px;
    }
    .button-pair {
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(2, 1fr);
    }
    /* 버튼 스타일 */
    .modal-button {
        padding: 7px;
        border: none;
        border-radius: 15px;
        background:  #f0f0f0;
        cursor: pointer;
        font-size: 1em;
        transition: background-color 0.3s ease;
    }
    .modal-button.selected {
        background-color: #5c8edc;
        font-weight: bold;
    }
    .modal-button:hover {
        background-color: #A7C6ED;
    }
    .complete-btn {
        background-color: #A7C6ED;
        color: white;
        margin-top: 15px;
    }

    /* 선택된 상태일 때 */
    .is-selected {
        background-color: #A7C6ED; /* 활성화된 버튼의 배경색 */
        cursor: pointer;  /* 포인터 커서 */
        font-weight: bold;
    }

    .is-selected:hover {
        background-color: #5c8edc; /* 활성화된 버튼의 hover 배경색 */
        font-weight: bold;
    }

    /* 선택되지 않은 상태일 때 */
    .is-not-selected {
        background-color: #A7C6ED; /* 비활성화된 버튼의 배경색 */
        cursor: default; /* 기본 커서 */
    }

    .is-not-selected:disabled {
        background-color: #e0e0e0; /* 비활성화된 버튼의 배경 색 */
    }

    /* 닫기 버튼 */
    .close-btn {
        position: absolute;
        top: 5px;
        right: 5px;
        background: none;
        border: none;
        font-size: 1.5em;
        color: rgba(0, 0, 0, 0.5);
        cursor: pointer;
        transition: color 0.3s ease;
    }

    .close-btn:hover {
        color: black;     
    }

    @media screen and (max-width: 768px) {
        .title {
            top: -50px;
            left: 10px;
            width: 100%;
        }
        .title-img {
            height: 70px;
            width: 70px;
            margin: 0;
            position: absolute;  /* 절대 위치로 설정 */
            top: 65px;         /* 위로 이동 */
            left: 25%;          /* 가운데 정렬 */
            transform: translateX(-50%);
        }
        .title-text-bg {
            position: absolute;
            width: 210px;  /* 말풍선 너비 증가 */
            height: 55px;   /* 말풍선 높이 조정 */
            top: 30px;     /* 이미지 아래로 위치 조정 */
            left: 55%;     /* 중앙 정렬 */
            transform: translateX(-50%);
        }
        .title-text {
            font-size: 1.1rem;
            white-space: nowrap;  /* 텍스트 한 줄 유지 */
            position: absolute;
            top: 40px;     /* 이미지 아래로 위치 조정 */
            left: 55%;     /* 중앙 정렬 */
            transform: translateX(-50%);
            padding: 5px 15px;
        }

        .modal-content {
            width: 90%;
            padding: 120px 20px 20px;
            margin: 0 10px;
        }

        .button-pair {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
        }

        .modal-button {
            padding: 10px 5px;
            font-size: 0.9em;
            white-space: nowrap;
            background: #f0f0f0; /* PC와 동일한 배경색 */
            color: inherit; /* 텍스트 색상 유지 */
        }

        .complete-btn {
            background-color: #A7C6ED; /* PC와 동일한 스타일 */
            color: white;
            margin-top: 10px;
        }
    }
    @media (orientation: landscape) {
        body {
            transform: rotate(-90deg);
            transform-origin: center;
        }
    }
`