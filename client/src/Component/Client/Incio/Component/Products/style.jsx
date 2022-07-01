import styled from "styled-components";

export const ProductsStyle = styled.div`
    width: 70%;
    margin: auto;

    @media (max-width: 900px) {
            width: 90%;
        }

    .filt{
    width: 50%;
    flex-direction: row;
    justify-content: space-between;
    flex-direction:row;
    overflow-x: scroll;
    overflow-y: hidden;
    gap: 7px;
}
`