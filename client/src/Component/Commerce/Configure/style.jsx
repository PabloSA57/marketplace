import styled from "styled-components";
import { Color } from "../../../styles/color";

export const  ConfigureStyle = styled.section` 
    width: 50%;
    height: 100vh;
    margin-top: 20px;

    .card-sec {

        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 50px;
        background-color: ${Color.Pricipal};
        border-bottom: 1px solid grey;
        cursor: pointer;
    }

    @media only screen and (max-width: 850px){
        width: 90%;
    }
    @media only screen and (max-width: 750px){
        width: 100%;
    }
`