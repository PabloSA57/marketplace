import styled from "styled-components";
import { Color } from "../../../../styles/color";

export const CardOrderStyle = styled.div` 
    .details {
        border-radius: 0 0 20px 20px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        color: ${Color.Text};
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
        padding: 3px;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        border-radius:10px; 
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        height: 50px;
    }
    
    .head-card-noti {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        background-color: ${Color.Pricipal};
        width: 100%;
        align-items: center;
    }

    .MuiAccordionSummary-content {
        width: 100%;
    }
    .head-cont-noti {
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .icon-state {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .icon-state p {
        margin: 0;
        color: ${Color.Text};
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
        gap: 9px;
        align-items: center;
    }

    .con-img img {
        height: 40px;
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