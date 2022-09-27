import styled from "styled-components";

export const  NotiStyle = styled.div` 
    width: 40%;
    height: 100vh;
    overflow: auto;
    gap: 10px;

    @media (max-width: 750px){
        width: 100%;
    }

    @media  screen and (min-width: 750px) and (max-width: 850px){
        width: 80%;
        margin: auto;
    }
`