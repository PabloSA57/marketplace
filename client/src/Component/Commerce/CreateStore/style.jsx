import styled from "styled-components";
import { Color } from "../../../styles/color";

export const  FormStoreStyle = styled.div`
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    background-color: ${Color.Pricipal};
    padding: 15px;
    box-shadow: 5px 5px 5px 0px lightgray;

    .tit {
        flex-direction: row;
        justify-content: center;
    }

    .tit h2 {
        padding: 0;
        margin: 0;
    }
    .form-store {
        display: flex;
        gap: 2px;
        flex-direction: column;
        width: 100%;
    }

    .con-btn-image {
        width: 300px;
        height: 150px;
    }

    .con-form {
        gap: 15px;
    }

    .con-map {
        width: 100%;
        height: 300px;
        margin-bottom: 1em;
    }

    .msg-map {
        font-size: 0.8em;
        color: #ffb700;
    }
    .btn-image {
        width: 100%;
        height: 100%;
    }

    .btn-sb {
        height: 39px;
        background-color: ${Color.One};
        border: none;
    }

    .inp {
        height: 35px;
        border: 1px solid gray;
    }

    .inp:focus {
        border: 1px solid red;
    }


`