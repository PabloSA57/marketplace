import styled from "styled-components";
import { Color } from "../../../../styles/color";

export const  AddProductStyle = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    background-color: #3b3b3b63;
    

    .-con{
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        
    }
    .con-edit{
        background-color: #FFFFFF;
        width: 70%;
        height: 100vh;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: 8px;
    }

    .con-edit11 button{
        width: 10px;
        cursor: pointer;
    }
    .filt{ width: 50%;
    flex-direction: row;
    justify-content: space-between;
    flex-direction:row;
    overflow-x: scroll;
    overflow-y: hidden;
    gap: 7px
    }

    
    .con-edit12{
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 12px;
    }

    .con-edit13{
        flex-direction: row;
        flex-wrap: wrap;
        margin-bottom: 20px;
        gap: 2%;
        min-height: 300px;
    }

    .btn-add {
        position: absolute;
        bottom: 20px;
        right: 10px;
        background-color: ${Color.One};
        border: none;
        color: #FFFFFF;
        border-radius: 5px;
        cursor: pointer;
        padding: 5px;
    }

    @media only screen and (max-width: 750px){
        width: 100%;

        .con-edit {
            width: 100%;
        }
    }
`