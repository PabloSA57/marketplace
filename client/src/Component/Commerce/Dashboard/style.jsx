import styled from "styled-components";

export const  DashboardStyle = styled.div` 
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
        background-color: #C5EAD9;
        justify-content: center;
    }

    .con111{
        font-size: 34px;
        font-weight: 400;
    }

    .con21{
        width: 95%;
        margin: auto;
    }

    .con2 {
        background-color: aliceblue;
        padding-bottom: 15px;
        background-color: #f9f9f9;
        border-radius: 20px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    }

    .con3 {
        width: 100%;
        background-color: #f9f9f9;
        border-radius: 20px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: 5px;
        min-height: 300px;
        
    }

    .subtitulos-dh {
        margin: 0;
        color: #757171;
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
        background-color: #ffffff;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    @media only screen and (max-width: 850px){
        width: 90%;
    }
` 