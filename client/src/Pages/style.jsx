import styled from "styled-components";
import img from '../media/login1.jpg';

export const  RegisterLoginStyle = styled.main`
    
    .con {
        position: relative;
        overflow: hidden;
        width: 100%;
        min-height: 100vh;
        background-color: #ffffff;
    }

    .img-rl {
        position: absolute;
        width: 100%;
        height: 320px;
        background-image: url('https://images.pexels.com/photos/3965406/pexels-photo-3965406.jpeg');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        height: 100%;
    }

    .con1 {
        position: relative;
        width: 100%;
        margin: 0 auto;
        color: #4a4a4a;
    }

    .con11 {
        flex-direction: row;
        justify-content: space-between;
    }
    .con1-figure {
        
        width: 154px;
        height: 50px;
        background-color: #f52f41;
    }


    .btn-cs {
        
        width: 150px;
        height: 30px;
        background-color: darkgray;
        border: none;
        cursor: pointer;
        z-index: 30;
    }
    .con12 {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        width: 70%;
        margin: auto;
        height: 100vh;
    }

    .con123 {
        width: 50%;
        justify-content: center;
    }

    .con124 {
        display: table-cell;
        vertical-align: middle;
        height: auto;
    }

    .con124-form{
        width: 50%;
        justify-content: center;
    }

    .con0 {
        display: block;
    }

    .con01 {
        padding-top: 60px;
        padding-bottom: 60px;
        max-width: 1100px;
        margin: 0 auto;
       // background-color: #4a4a4a;
    }

    .con011 {
        height: 170px;
        background-color: #ffffff;
        flex-direction: row;
        justify-content: space-between;
    }

    .con011-card {
        height: 100%;
        width: 30%;
        //background-color: #0d6fc4;
        flex-direction: row;
        justify-content: center;
        color: #253D4E;
        gap: 10%;
        align-items: center;
    }

    .-card-img {
        width: 52px;
        height: 52px;
    }

    .-card-img img{
        width: 50px;
        height: 50px;
    }

    .con-text {
        max-width:70%;
    }
    .-con-text1 {
        font-size: 18px;
        font-weight: 600;
        line-height: 22.5px;
        margin-bottom: 10px;
        
    }

    .-con-text2 {
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        margin: 0;
        color: #ADADAD;
    }
    
` 