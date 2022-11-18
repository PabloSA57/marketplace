import styled from "styled-components";
import { Color } from "./color";

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

export const ChipFilter = styled.button.attrs(props => ({
    color: props.color || "black",
    backgroundcolor: props.backgroundcolor || 'white',
}))`
    color: ${props => props.color};
    cursor: ${props => props.cursor};
    background-color: ${props => props.backgroundcolor};
    padding: 3px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    min-width: 50px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
`

export const Button = styled.button.attrs(props => ({
    width: props.width,
    height: props.height,
    colortext: props.colortext 
}))`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.primary ? Color.One : Color.Two};
    color: ${props => props.colortext || Color.Pricipal};
    border: none;
    box-shadow: 5px 5px 5px 0px lightgray;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;

`
export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 16px;
`



