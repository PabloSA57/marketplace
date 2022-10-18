import styled from "styled-components";
import { Color } from "../../../styles/color";

export const  NotiStyle = styled.div` 
    width: 40%;
    height: 100vh;
    overflow: auto;
    gap: 10px;
    color:${Color.Text};
    .filter {
        width: 100%;
    }
    .cont-filter {
        width: 100%;
        flex-direction: row;
        gap: 15px;
    }

    .select-input {
        padding: 0.3rem;
        width: 100%;
        height: 30px;
        border: 2px solid #2f2c45;
        
        border-radius: 5px;
        font-size: 15px;
        outline: none;
        transition: all 0.3s;
        color: #a24040;
    }

    .labelselect {
        position: absolute;
        left: 10px;
        top: -10px;
        transition: all 2.0s;
        padding: 0 2px;
        z-index: 1;

    }

    .labelselect::before {
        content: "";
        height: 5px;
        background-color: #e6e6e6;
        position: absolute;
        left: 0px;
        top: 10px;
        width: 100%;
        z-index: -1;
    }

    .select-input:focus {
        border: 2px solid #7e4ccb;
    }

    .select-input:focus + .labelselect, .filled {
        top: -10px;
        color: #7e4ccb;
        font-size: 14px;
    }

    .select-input::placeholder {
        font-size: 16px;
        opacity: 0;
        transition: all 0.3s;

    }

    .select-input:focus::placeholder {
        opacity: 1;

    }
    @media (max-width: 750px){
        width: 100%;
    }

    @media  screen and (min-width: 750px) and (max-width: 850px){
        width: 80%;
        margin: auto;
    }
`