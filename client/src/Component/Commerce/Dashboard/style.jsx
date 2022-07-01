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

    .con11{
        width: 95%;
        margin: auto;
    }

    .con111{
        font-size: 34px;
        font-weight: 400;
    }

    .con21{
        width: 95%;
        margin: auto;
    }

    .con22{
        margin-top: 20px;
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

    .c-icon{
        width: 60px;
        height: 60px;
        background-color: aqua;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
    }

    .card-product{
        width: 40%;
        height: 50px;
        background-color: #ffffff;
        flex-direction: row;
        align-items: center;
        border: 0.1px solid #bcbcbc;
    }

    .cp-img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: aqua;
        
    }
` 