import styled from "styled-components";
import { Color } from "../../styles/color";

export const  InputStyle = styled.div`
    &{
        gap: 0.2em;
        width: 100%;
    }
    & label {
        font-size: 0.8em;
        font-weight: 570;
    }
    .inpgeneral {
        height: 3em;

        width: 100%;
        padding: 0.2em;
        padding-left: 0.5em;
        box-sizing: border-box;
    }

    .inpgeneral::placeholder {
        color: #253d4ec6;
        font-size: 0.8em;
    }

    .inpgeneral:focus {
        border: 1.5px solid black;
    }
    .inp {
        border: 1px solid gray;
    }
    .inpactive {
        border: 1px solid red;
    }

    
    .inpactive:focus, .inpactive[type]:focus  {
        border: 2px solid red;
        outline: none;
    }

    .message {
        color: red;
        font-size: 0.9em;
    }
`