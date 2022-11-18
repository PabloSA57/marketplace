import styled from "styled-components";
import { Color } from "../../../../../../styles/color";

export const CardStyle = styled.div`
    background-color: ${Color.Pricipal};
    min-width: 22em;
    padding: 0.8em;
    background-color: ${Color.Pricipal};
    border-radius: 0.5em;
    color: ${Color.Text};
    box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.15);

    li {
        list-style: none;
    }
    p, h6, ul {
        margin: 0;
        padding: 0;
    }

    h6 {
        font-size: 1em;
    }
    .text-sec {
        display: flex;
        flex-direction: row;
        gap: 0.3em;
        font-size: 0.875em;
        font-weight: 300;

        line-height: 1em;
        letter-spacing: -0.02em;
    }
    .con-card {
       
    }

    .img-infoorder, .fecha-pay { 
        flex-direction:row;
    }

    .img-infoorder {
        height: 5em;
        align-items: center;
    }

    .fecha-pay, .product {
        gap: 0.8em;
    }

    .infoorder {
        gap: 0.5em;
    }
    .img {
        width: 40%;
        border-radius: 3px;
    }

    .img img {
        width: 100%;
        height: 100%;
    }

    .product ul{
        display: flex;
        flex-direction: row;
        gap: 1em;
    }

    .quant {
        font-weight: 800;
    }

    .state {
        position: absolute;
        top:0;
        right: 0.4em;
        font-size: 0.875em;
        color: ${Color.One}
    }
`