import styled from "styled-components";

export const OrderStyle = styled.section`
    width: 450px;
    height: 100%;
    
    .container {
        background-color: aliceblue;
        flex-direction: column;
        padding: 8px;
        height: 100%;
    }

    .head {
        justify-content: center;
        align-items: center;
        border-bottom: 3px dashed gray;
    }

    .head-h2 {
        padding:  0;
        margin: 0;
        font-family: 'Racing Sans One';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 40px;
        font-family: 'Racing Sans One';
    }

    .head-h5 {
        padding:  0;
        margin: 0;
        font-size: 18px;
        font-weight: 400;
    }

    .datos {
        flex-direction: row;
        border-bottom: 3px dashed gray;

    }

    .datos-logo {
        width: 30%;
    }
    .datos-order {
        width: 70%;
    }

    .datos-general {
        flex-direction: row;
        justify-content: space-between;
       
    }
    
    .product {
        min-height: 200px;
        border-bottom: 3px dashed gray;
        flex: 1;
    }

    .product-info {
        flex-direction: column;
    }

    .pro-i {
        flex-direction: row;
        justify-content: space-between;
    }
    .amount-total {
        min-height: 100px;
        justify-content: center;
    }

    .precios {
        border-bottom: 3px dashed gray;
    }

    @media only screen and (max-width: 600px) {
            width: 100%;
        }
    
    
`