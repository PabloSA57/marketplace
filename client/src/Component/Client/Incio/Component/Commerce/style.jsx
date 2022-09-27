import styled from "styled-components";

export const  CommerceStyle = styled.section`
    width: 70%;
    margin: auto;
    margin-bottom: 20px;

    @media (max-width: 900px) {
            width: 90%;
    }

    .div-row {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }
    .concardcomercio{
        width: 100%;
        height: 160px;
        position: relative;
    }

    .text-sub h3{
        font-size: 20px;
        font-weight: 525;
        line-height: 20px;
        color: #253D4E;
    }

    .btn-loca {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: none;
        color: #ffffff;
        background-color: orange;
        font-size: 15px;
        font-weight: 700;
    }
` 
export const CarouselCommerce = styled.section`
    
    flex-direction:row;
    overflow-x: scroll;
    overflow-y: hidden;
`