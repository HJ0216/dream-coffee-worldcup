import styled from "styled-components";

export const ResultBox = styled.div`
    html, body {
        width: 100%;
        height: 100%;
        overflow: hidden;
        transform: rotate(0deg); /* 기본 회전 */
    }

    display: flex;
    min-height: 100vh;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, #f0f0f0, #d9e4f5);

    .basic-button {
        margin-top: 15px;
        padding: 7px 15px;
        border: none;
        border-radius: 15px;
        background:  #f0f0f0;
        color: white;
        cursor: pointer;
        font-size: 1em;
        transition: background-color 0.3s ease;
    }
    .basic-button.selected {
        background-color: #5c8edc;
        font-weight: bold;
    }
    .basic-button:hover {
        background-color: #A7C6ED;
    }

    .share-btn {
        background-color: #A7C6ED; /* 활성화된 버튼의 배경색 */
        cursor: pointer;  /* 포인터 커서 */
        font-weight: bold;
    }

    .share-btn:hover {
        background-color: #5c8edc; /* 활성화된 버튼의 hover 배경색 */
        font-weight: bold;
    }
]}

`;

export const ImageContainer = styled.div`
    position: relative; /* 부모 컨테이너의 위치를 기준으로 */
    width: 100%; /* 필요에 따라 고정 크기 조정 */
    height: auto; /* 비율에 맞춰 높이 자동 조정 */
`;

export const TitleImage = styled.img`
    width: 100%;
    height: auto; /* 비율에 맞게 높이 설정 */
`;

export const BrandImage = styled.img`
    position: absolute;
    top: -63%; /* 기존 위치 유지 */
    left: 58%; /* 기존 위치 유지 */
    transform: translateX(-50%) scale(0.08); /* scale을 1로 수정하여 크기 조정 */
    width: 340px; /* 고정 크기 */
    height: 340px; /* 고정 크기 */
    object-fit: cover; /* 비율 유지하면서 크기 맞추기 */
    z-index: 1; /* 브랜드 이미지가 타이틀 이미지 위에 표시되도록 설정 */
`;