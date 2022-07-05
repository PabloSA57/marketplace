import styled from "styled-components";

export const ProductsStyle = styled.div`
    width: 70%;
    margin: auto;

    @media (max-width: 900px) {
            width: 90%;
        }
    
        .div-row {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
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
    .contain {
        flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 20px;
    gap: 2.6%;
    min-height: 300px;

  
    }

    @media (max-width: 768px) {
        .contain {gap: 10%;}
    }

`