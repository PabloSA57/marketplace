import styled from "styled-components";

export const CardCommerceStyle = styled.div.attrs(props => ({
    activeColor: props.activeColor || "rgba(173, 173, 173, 0.25)"
}))`
    width: 140px;
    height: 150px;
    margin-right: 10px;
    border:1px solid ${props => props.activeColor};
    border-radius: 5px;
    cursor: pointer;

    .con{
    margin: 5px;
    height: 100%;
    }
    .conimg{
        width: 100%;
        height: 50%;
    }

    .conimg img{
        border-radius: 10px;
    }

    .scrollh > div {
        flex-direction: row;
    }

    .active{
        background-color: aqua;
    }

    &:hover {
        box-shadow: 1px  2px 5px grey;
    }

`

