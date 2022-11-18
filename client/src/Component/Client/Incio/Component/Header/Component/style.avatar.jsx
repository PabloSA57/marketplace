import styled from "styled-components";
import { Color } from "../../../../../../styles/color";

export const AvatarStyle = styled.div`
    flex-direction: row;
    align-items: center;

    .avatar {
        width: 1.5em;
        height: 1.5em;
        font-size: 1em;
        padding: 1.0em;
    }

    .mas {
        cursor: pointer;
    }

    .mas:hover {
        background-color: #d6d6d6;
    }

    .menu-desple {
        z-index: 7;
        //display: none;
        position: absolute;
        min-height: 40px;
        max-height: 500px;
        background-color: #ffffff;
        top: 35px;
        left: 0px;
        max-width: 100px;
        justify-content: center;
        box-shadow: 0 2px 4px rgb(0 0 0 black);
    }

    .menu-desple1 {
        width: 100px;
        align-items: center;
    }
    .menu-desple2 {
        flex-direction: row;
        gap: 5px;
        padding: 3px;
    }

    .menu-desple2:hover {
        background-color: #d6d6d6;
        cursor: pointer;
    }
    .menu-desple2 span {
        font-size: 12px;
        color: ${Color.Text};
    }
`