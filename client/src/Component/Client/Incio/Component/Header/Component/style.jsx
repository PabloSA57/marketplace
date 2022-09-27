import styled from "styled-components";
import { Color } from "../../../../../../styles/color";

export const CartLogoStyle = styled.div`
        flex-direction: row;
        align-items: center;
        gap: 8px;


        .cart {
            cursor: pointer;
        }
        .carritonoti{
        position: absolute;
        top: -5px;
        right: -3px;
        height: 12px;
        width: 12px;
        border-radius: 50%;
        background-color: ${Color.One};
        align-items: center;
        justify-content: center;
        color: #ffffff;
    }

    .lenght {
        font-size: 12px;
    }

    .concarritoprecio {
        margin-left: 4px;
    }
    .carritoprecio{
        height: 16px
    }

    .name {
        color: ${Color.Text};

    }

    .precio {
        color: ${Color.One};
    }

    .mas {
        cursor: pointer;
    }

    .mas:hover {
        background-color: #d6d6d6;
    }

    .menu-desple {
        z-index: 7;
        //display: none;
        position: absolute;
        min-height: 40px;
        max-height: 500px;
        background-color: #ffffff;
        top: 35px;
        left: 0px;
        max-width: 100px;
        justify-content: center;
        box-shadow: 0 2px 4px rgb(0 0 0 black);
    }

    .menu-desple1 {
        width: 100px;
        align-items: center;
    }
    .menu-desple2 {
        flex-direction: row;
        gap: 5px;
        padding: 3px;
    }

    .menu-desple2:hover {
        background-color: #d6d6d6;
        cursor: pointer;
    }
    .menu-desple2 span {
        font-size: 12px;
        color: ${Color.Text};
    }
`