import styled from "styled-components";

export const  EditPerfilStyle = styled.section`
    width: 50%;

    .inp-form1 {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

    }

    .inp-imgstore {
        width: 40%;
    }

    .inp-info {
        width: 60%;
        min-width: 300px;
    }

    @media only screen and (max-width: 850px){
        width: 90%;
    }
    @media only screen and (max-width: 750px){
        width: 100%;
    }

    @media only screen and (max-width: 553px){
        .inp-info {
            width: 100%;
        }
    }
`