import styled from "styled-components";
import { Color } from "../../../../../../styles/color.js";

export const CardProductStyle = styled.div`
    background-color: #FFFFFF;
    width: 23%;
    height: 300px;
    border: 1px solid rgba(173, 173, 173, 0.25);
    border-radius: 3px;
    margin-bottom: 20px;

    

    .con{
        margin: 5px;
        height: 100%;
        justify-content: space-around;
    }

    .conimg{
        width: 100%;
        height: 40%;
    }

    .conimg img{
        width: 100%;
        height: 100%;
    }

    .con2{
        flex-direction: row;
        justify-content: space-between;
    }

    .con2 button {
        width: 89.5px;
        height: 33.67px;
        background-color: ${Color.Two};
        color: ${Color.One};
        border: none;
        border-radius: 2px;
        box-shadow: 5px 5px 5px 0px lightgray;
        cursor: pointer;
    }

    @media (max-width: 700px) {
        height: 180px;
        width: 45%;

        .con2 button {
            width: 65px;
        }
    }

`