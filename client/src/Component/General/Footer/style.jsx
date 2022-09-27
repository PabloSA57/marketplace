import styled from "styled-components";

export const  FooterStyle = styled.footer`
    display: block;

    .con-footer0 {
        max-width: 1100px;
        margin-top: 60px;
        margin-bottom: 60px;
        margin: 0 auto;

    }

    .con-footer {
        height: 100px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .con-footer3 {
        flex-direction: row;
        gap: 5px;
    }

    .con-footer2 {
        max-width: 100px;
        height: 50px;
    }

    .footer-logo {
        width: 50px;
        height: 50px;
    }

    @media (max-width: 700px) {
        width: 100%;

        .footer-logo {
            width: 30px;
            height: 30px;
        }

    

        .con-footer1 p{
            font-size: 12px;
        }
        .con-footer2 {
            width: 50px;
        }
    }

` 