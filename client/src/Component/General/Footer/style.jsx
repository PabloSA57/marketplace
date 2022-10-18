import styled from "styled-components";

export const  FooterStyle = styled.footer`
    display: flex;
    align-items: center;
    border-top: 0.5px solid black;

    .con-footer0 {
        width: 70%;
        padding: 1em;
    }

    .con-footer {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .con-footer3 {
        flex-direction: row;
        gap: 5px;
    }

    .con-footer2 {
        max-width: 4em;
    }

    .footer-logo {
        width: 2em;
        height: 2em;
    }

    @media (max-width: 700px) {
        .con-footer0 {
            width: 90%;
        }
    }

` 