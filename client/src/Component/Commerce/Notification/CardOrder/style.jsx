import styled from "styled-components";

export const CardOrderStyle = styled.div` 

    .details {
       
        border-radius: 0 0 20px 20px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .categoria-product {
        background-color: #3f3fb0;
    }

    .categoria-product  td {
        font-size: 16px;
        font-weight: bold;
    }

    .info-product {
        background-color: orange;
    }

    .img-name {
        display: flex;
        flex-direction: row;
        align-items: center;

    }
    .con-cardproduct {
        gap: 5px;
    }
    .card-product-order {
        padding: 5px;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        border-radius:20px; 
        background-color: aliceblue;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    
    .head-card-noti {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    .info-table {
        
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 5px; 
    }

    .table-row {
        flex-direction: row;
        width: 33%;
        font-weight: 500;
        display: block;
    }

    .data-table {
        font-size: 14px;
        
    }
    .con-img {
        flex-direction: row;
        width: 20%;
        gap: 9px
    }
    .img-product {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }

    .unid, .precio {
        flex-direction: row;
        align-items: center;
    }

    .total {
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
    }

    ` 