import styled from "styled-components";
import { Color } from "../../styles/color";

export const  LoginRegisterStyle = styled.div`
    width:100%;
    background-color: ${Color.Pricipal};
    
    align-items: center;
    padding: 1em;

    .con-lr{
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 0.8em;
    }

    .con-lr form{
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;
        gap:3em;
    }
    .input-div {
        width: 100%;
    }
    .input-div input, select {
        width: 100%;
        height: 35px;
        border-radius:15px;
        border: 0.1px solid #6C6A6A;
        
    }

    .div-btn {
        width: 100%;
    }
    .div-btn button {
        height: 35px;
        
        border: none;
        background-color: ${Color.One};
        cursor: pointer;
    }

    .msg-error {
        margin: 0.3em;
        color: red;
        text-align: center;
    }

    .prueba-map {
        width: 100%;
        height: 100px;
    }

` 