import styled from "styled-components";

export const CardProductStyle = styled.div.attrs(props => ({
    activeSelect: props.activeSelect || "rgba(173, 173, 173, 0.25)"
}))`
    background-color: #FFFFFF;
    width: 15%;
    height: 250px;
    border: 1px solid ${props => props.activeSelect};
    border-radius: 3px;
    margin-bottom: 20px;
    cursor: pointer;

    .con{
        margin: 5px;
        height: 100%;
        justify-content: space-around;
    }

    .con1{
        flex-direction: column;
        
    }
    .conimg{
        width: 100%;
        height: 40%;
    }

    .conimg img{
        width: 100%;
        height: 100%;
    }

    .text-cat{
        font-size: 12px;
    }

    .text-nam{

    }

`