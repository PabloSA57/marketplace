import styled from "styled-components";
import { Color } from "../../../../../styles/color";


export const  ProcesOrderStyle = styled.div`
    background-color: ${Color.Pricipal};
    width: 400px;
    padding: 0.8em;
    justify-content: center;
    align-items: center;
    gap: 2em;
    color: ${Color.Text};
    overflow: auto;
    .name-store {
        align-items: center;
    }

    & .name-store p{
        font-size: 0.7em;
        letter-spacing: -0.09em;
    }

    & .name-store h2{
        color: ${Color.One}
    }

    .con-map {
        height: 14em;
        width: 100%;
    }

    & form {
        margin-top: 1em;
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 1.2em;
    }

    & form h5 {
        font-size: 1em;
        letter-spacing: -0.02em;
        font-weight: 600;
    }

    & .btn-form { 
        flex-direction: row;
        gap: 1.2em;
    }

    & .telefono {
        flex-direction:row;
        width: 100%;
        justify-content: space-between;
        align-items: end;
    }

    & .telefono .cde {
        width: 5em;
        height: 2.5em;
        border-bottom: 1px solid gray;
        align-items: center;
        justify-content: center;
        font-size: 0.6em;
        font-weight: 300;
    }

    .telefono .inp-con {
        width:70%;
    }
    
    & .btn-form button, .active{ 
        width: 50%;
        height: 2.5em;
        border: none;
        border-radius: 10px;
        background-color: ${Color.Pricipal};
        cursor: pointer;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
        
    }
    
    & .btn-form .btn-mp img{ 
        width: 60%;
        height: 70%;
    }
    & .btn-form .active {
        border: 2px solid orange;
    }

    & .msg-pay {
        font-size: 0.8em;
    }

    .switch {
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
    }

    .con-svg svg{
        animation-name: mover;
        animation-duration: 2s;
        animation-direction: normal;
        animation-iteration-count: infinite;
    }

    @keyframes mover{
        from {
            transform: translateX(0%);
        }
        to {
            transform: translateX(500%);
        }
    }

    & .product-total {
        width: 100%;
        padding: 1.2em;
        background-color: ${Color.Pricipal};
        flex-direction: row;
        justify-content: space-between;
        box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.15);
        border-radius: 10px;

    }

    .info-store {
        width: 100%;
        box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.15);
        background-color: ${Color.Pricipal};
        padding: 1.2em;
        border-radius: 10px;
        gap: 0.6em;
    }

    .info-store .info {
        flex-direction: row;
        font-size: 0.8em;
        justify-content: space-between;
    }

    .cont-state {
        height: 100vh;
        background-color: ${Color.Pricipal};
        align-items: center;
        justify-content: center;
    }

    .btn-close {
        position: absolute;
        left: 1em;
        top: 1em;
        padding: 0;
        border: none;
        cursor: pointer;
    }
    `