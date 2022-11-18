import styled from "styled-components";
import img from '../media/login1.jpg';
import { Color } from "../styles/color";

export const  RegisterLoginStyle = styled.main`
        color: ${Color.Text}; 
    .con {
        position: relative;
        overflow: hidden;
        width: 100%;
        min-height: 100vh;
        background-color: #c8c8c8;
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
        min-height: 100vh;
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
        
        justify-content: center;
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

    .con124 h2 {
        font-size:2em;
    }

    .con124-form{
        width: 50%;
        max-width: 500px;
        justify-content: center;
        margin-bottom: 40px;
    }

    .con0 {
        display: block;
    }

    .con01 {
        padding-top: 4em;
        padding-bottom: 4em;
        max-width: 1100px;
        margin: 0 auto;
       // background-color: #4a4a4a;
    }

    .con011 {
        padding: 1em;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .con011-card {
        height: 100%;
        width: 30%;
        min-width: 150px;
        //background-color: #0d6fc4;
        flex-direction: row;
        justify-content: center;
        color: #253D4E;
        gap: 10%;
        align-items: center;
    }

    .-card-img {
        width: 3.3em;
        height: 3.3em;
    }

    .con-text {
        max-width:70%;
    }
    .-con-text1 {
        font-size: 1.2em;
        font-weight: 600;
        line-height: 22.5px;
        margin-bottom: 10px;
        
    }

    .-con-text2 {
        font-size: 1em;
        font-weight: 500;
        line-height: 20px;
        margin: 0;
        color: #ADADAD;
    }

    @media only screen and (max-width: 765px) {
        .con12 {
            width: 95%;
        }

        .con011 {
            gap: 2em;
        }
        .con011-card {
            width: 100%;
        }
        .con124-form {
            width: 100%;
        }
    }

    @media only screen and (min-width: 765px) and (max-width: 1023px) {
        .con12 {
            width: 80%;
        }
        .con124-form {
            width: 100%;
        }
    }
    
` 