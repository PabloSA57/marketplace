import styled from "styled-components";
import { Color } from "../../../styles/color";

export const CartStyle = styled.section`
    width: 70%;
    margin: auto;
    padding: 60px;
    background-color: #ffffff;
    border: 0.01px solid #DADADA;
    margin-top: 20px;
    border-radius: 10px;
    box-shadow: 5px 5px 5px 0px lightgray;

    .con-pago {
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        justify-content: end;
    }
    .con-pago1 {
        width: 100%;
        align-items: flex-end;
        gap: 10px;
    }

    .con-pago1 span {
        font-size: 22px;
        color: ${Color.Text}
    }
    
    .con-btn2 {
        width: 40%;
        gap: 10px
    }

    @media (max-width: 700px) {
        width: 90%;
        padding: 20px;

        .con-pago1 span {
            font-size: 18px;
        }
        .btn-pago {
            width: 150px;
        }

        .con-btn2 {
            width: 100%;
        }
    }
`