import styled from "styled-components";
import { Color } from "../../../styles/color";

export const  DashboardStyle = styled.section` 
    width: 50%;
    height: 100vh;

    .con{
        width: 100%;
        height: 100%;
        gap: 15px;
    }

    .con1{
        width: 100%;
        height: 200px;
        background-color: ${Color.Two};
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
    }
    .svg-dash {
        width: 50%;
        height: auto;
    }
    .con111{
        font-size: 34px;
        font-weight: 400;
    }

    .con21{
        width: 100%;
        
    }

    .con2 {
        
        padding-bottom: 15px;
        border-radius: 20px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    }

    .con3 {
        width: 100%;
        //box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: 5px;
        min-height: 300px;
        
    }

    .subtitulos-dh {
        margin: 0;
        color: ${Color.Text};
    }

    .con22{
        margin-top: 20px;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
    }
    .card-acti{
        width: 40%;
        height: 100px;
        background-color: #701f1f;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    @media only screen and (max-width: 850px){
        width: 90%;
    }

    @media only screen and (max-width: 750px){
        width: 100%;
    }
` 