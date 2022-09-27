import styled from "styled-components";

export const  LoginRegisterStyle = styled.div`
    width:100%;
    background-color: #ffffff;
    border-radius:20px;
    align-items: center;

    .con-lr{
        justify-content: center;
        align-items: center;
        width: 90%;
    }

    .con-lr form{
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;
        gap:40px;
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
        width: 120px;
    }
    .div-btn button {
        height: 35px;
        border-radius: 10px;
        border: none;
        background-color: orange;

    }

    
` 