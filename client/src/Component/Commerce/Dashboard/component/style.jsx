import styled from "styled-components";
import { Color } from "../../../../styles/color";

export const  CardDashboardStyle = styled.div`

        width: 40%;
        height: 80px;
        background-color: ${Color.Pricipal};
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        color: ${Color.Text};

    .c-icon{
        width: 70px;
        height: 70px;
        
        border-radius: 50%;
        justify-content: center;
        align-items: center;
    }

    .c-icon img {
        width: 100%;
        height: 100%;
    }

    .title-card {
        font-size: 17px;
        margin: 0;
    }

    .valor-tve-ts {
        font-size: 20px;
        margin: 0;
    }

    .datos-cd {
        align-items: center;
        margin: 0;
    }

    .state {
        position: absolute;
        top: 0px;
        right: 3px;
    }

    .state .activado {
        color: green;
        font-size: 12px;
    }

    .state .desactivado {
        color: red;
        font-size: 12px;
    }

    @media only screen and (max-width: 750px){
        width: 47%;
    }
`