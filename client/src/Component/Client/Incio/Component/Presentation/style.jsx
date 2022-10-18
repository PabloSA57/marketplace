import styled from "styled-components";
import { Color } from "../../../../../styles/color";


export const PresentationStyle = styled.div`
    background-color: ${Color.Two};
    width: 100%;
    height: 450px;
    margin-top: 5px;
    margin-bottom: 20px;

    @media (max-width: 414px) {
        height: 250px;
    }
    .presentacion{
        width: 70%;
        margin: auto;
        flex-direction: row;
    }

    .Eslogan{
        width: 50%;
        justify-content: center;
        align-items: center;
    }

    .Eslogan p {
        font-size: 50px;
        font-weight: 500;
        line-height: 60px;
        color: ${Color.Text}
    }

    @media (max-width: 414px) {
        .Eslogan p {
            font-size: 30px;
            font-weight: 500;
            line-height: 30px;
        }

        .presentacion{
        width: 90%;
        margin: auto;
        flex-direction: row;
    }
    }

    .pngcarrito{
        width: 50%;
        flex-direction: row;
        justify-content: end;
    }

    .pngcarrito div{
        width: 70%;
    }
`