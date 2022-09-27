import styled from "styled-components";

export const  NavStyle = styled.div`
    background-color: #ffffff;
    width: 10%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    border: 0.02px solid #c7c7c7;

    .nav-items{
        gap: 100px;
    }

    .nav-item{

    }

    .active{
        color: #cb8103;
    }
    a {
        margin: 0;
    }

    @media only screen and (max-width: 750px){
        position: absolute;
        bottom: 0;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        height: 40px;
        z-index: 20;

        .nav-items a {
            margin: 0;
        }

        .nav-items {
            flex-direction: row;
            align-items: center;
        }
    }
` 