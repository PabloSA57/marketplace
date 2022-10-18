import styled from "styled-components";
import { Color } from "../../../../styles/color";

export const CardBestProductsStyle = styled.div`
        width: 45%;
        height: 50px;
        background-color: ${Color.Pricipal};
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-radius: 10px;
        padding: 5px;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        color: ${Color.Text};

        .cp-img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        
        
    }

    .cp-img img {
        width: 100%;
        height: 100%;
    }
`