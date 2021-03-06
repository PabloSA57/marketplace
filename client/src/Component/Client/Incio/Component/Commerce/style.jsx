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


` 
export const CarouselCommerce = styled.section`
    
    flex-direction:row;
    overflow-x: scroll;
    overflow-y: hidden;
`