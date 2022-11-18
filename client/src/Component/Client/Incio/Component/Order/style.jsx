import styled from "styled-components";
import { Color } from "../../../../../styles/color";

export const OrderStyle = styled.div`
    padding: 1em;
    width: 100%;
    min-width: 384px;
    height: 100vh;

    .con-order {
        gap: 1.3em;
        margin-top: 1em;
    }
    .con-filter {
        flex-direction: row;
        width: 100%;
        gap: 0.5em;
    }

    .con-filter button {
        width: 50%;
    }

    .btn-close {
        position: absolute;
        left: 1em;
        top: 1em;
        padding: 0;
        border: none;
        cursor: pointer;
        z-index: 30;
    }
`