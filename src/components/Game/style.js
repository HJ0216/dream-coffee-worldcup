import styled from "styled-components";

export const FlexBox = styled.div`

    display: flex;
    min-height: 100vh;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, #f0f0f0, #d9e4f5);

    .title {
        position: absolute;
        top: 0px;
        z-index: 2;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .title-img {
        height: 100px;
        width: 100px;
        border-radius: 50%;
        object-fit: cover;
        background: white;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        margin-top: 100px;
        margin-left: 20px;
    }
    .cursor-pointer {
        cursor: pointer;
    }
    .title-text-bg {
        position: absolute;
        top: 47px;
        left: 90px;
        width: 85%;
        height: 55%;
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
    

    .flex-1 {
        margin: 10px;
        flex: 1;
        min-width: 250px;
        max-width: 250px;
        min-height: 250px;
        max-height: 250px;
        overflow: hidden;
        background: white;
        border-radius: 10px;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3); 
        transition: transform 0.3s, box-shadow 0.3s;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            transform: translateY(-10px);
            box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.4);
        }
    }
    .logo-img {
        width: 95%;
        height: 95%;
        border-radius: 10px;
        transition: transform 0.5s ease, opacity 0.5s ease;
        object-fit: contain;
        cursor: pointer;
    }
    .logo-img:hover {
        transform: scale(1.1);
        opacity: 0.8;
    }

    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }
    .modal-content {
        background: white;
        padding: 20px;
        border-radius: 10px;
        text-align: center;
        width: 300px;
        position: relative; /* X 버튼을 절대 위치로 배치하려면 상대 위치로 설정 */
        z-index: 9999;
    }
`;