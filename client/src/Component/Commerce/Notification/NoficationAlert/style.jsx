import styled from "styled-components";
import { Color } from "../../../../styles/color";

export const  NotiAlertStyle = styled.div`
    justify-content: center;
    align-items: center;
    color: ${Color.Text};
    background-color: ${ Color.Pricipal} ;

    position: absolute;
    bottom: 30px;
    right: 0;
    z-index: 20;
    flex-direction: row;
    padding: 10px;
    animation: 1s infinite alternate slidein;

    @keyframes slidein {
        from {
            scale: calc(1);
        }

        to {
            scale: calc(1.2);
        }
    }

    & p {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;
        margin: 0;
    }

    & p span {
        color: ${Color.One};
    }

    .state-order {
        position: absolute;
        font-size: 10px;
        top: 0;
        right: 2px;

    }
`