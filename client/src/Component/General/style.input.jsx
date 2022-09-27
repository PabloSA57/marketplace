import styled from "styled-components";

export const  InputStyle = styled.div`
    .inpgeneral {
        height: 30px;
        width: 100%;
        padding: 0;
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
        margin: 10px;
        color: red
    }
`