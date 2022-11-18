import styled from "styled-components";
import { Color } from "../../../styles/color";

export const CartStyle = styled.section`
    width: 70%;
    margin: auto;
    padding: 3em;
    background-color: ${Color.Pricipal};
    border: 0.01px solid #DADADA;
    margin-top: 1.2em;
    border-radius: 20px;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.095);

    .con-pago {
        margin-top: 1.8em;
        display: flex;
        flex-direction: row;
        justify-content: end;
    }
    .con-pago1 {
        width: 17em;
        align-items: flex-end;
        gap: 0.8em;
    }

    .total {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .text-total {
        font-size: 1.2em;
        margin: 0;
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