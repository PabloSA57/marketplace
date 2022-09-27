import styled from "styled-components";


export const Text = styled.span.attrs(props => ({
    size:props.size,
    weight:props.weight,
    lineheight: props.line || '22px',
    color: props.color || "black",
    cursor: props.cursor || 'default'
}))`
    font-size: ${props => props.size};
    font-weight: ${props => props.weight};
    line-height: ${props => props.lineheight};
    color: ${props => props.color};
    cursor: ${props => props.cursor};

`

export const Button = styled.button.attrs(props => ({
    width: props.width,
    height: props.height,
    backgroundColor: props.backgroundColor,
    colortext: props.colortext || "white"
}))`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.backgroundColor};
    color: ${props => props.colortext};
    border: none;
    box-shadow: 5px 5px 5px 0px lightgray;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
`
