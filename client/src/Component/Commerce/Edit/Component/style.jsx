import styled from "styled-components";
import { Color } from "../../../../styles/color";

export const  CardProductStyle = styled.div` 
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: ${Color.Pricipal};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 4px;
    color: ${Color.Text};
    

    .stock{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: green;
    }

    .nostock{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: red;
    }
    .img-cp{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    .img-cp img{
        width: 100%;
        height: 100%;
    }

    .name-card{
        display: contents;
    }

    .categoria{
        display: contents;
    }
    .precio{
        width: 50px;
    }

    .edit-delete{
        flex-direction: row;
        gap: 5px;
    }

    .e-d-btn{
        color: #0a0a0a;
        cursor: pointer;
    }

    .btn-save button, .btn-close span {
        padding:  0;
        display: contents;
        cursor: pointer;
    }

    .active{
        color: ${Color.One};
    }

    .state-product fieldset{
            border-radius: 5px;
        }

    @media only screen and (max-width: 750px){
        font-size: 13px;
        .state-product fieldset{
            padding: 0;
        }
    }
`