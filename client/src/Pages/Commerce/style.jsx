import styled from "styled-components";

export const  CommercePStyle = styled.main`
    flex-direction: row;
    width: 90%;
    height: 100vh;
    margin: auto;
    gap: 10px;


    .btn-noti {
        position: fixed;
        bottom: 50px;
        right: 10px;
    }

    @media only screen and (max-width: 750px){
        width: 95%;
        
    }
` 