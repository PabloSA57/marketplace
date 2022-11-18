import styled from "styled-components";
import { Color } from "../../../../styles/color";

export const CardOrderStyle = styled.div` 
    .details {
        border-radius: 0 0 20px 20px;
        color: ${Color.Text};
        gap: 1em;
    }

    .details  h4 {
        font-size: 1.1em;
        margin-bottom: 0.3em;
    }

    .img-name {
        display: flex;
        flex-direction: row;
        align-items: center;

    }
    .con-cardproduct {
        gap: 0.5em;
    }
    .card-product-order {
        padding: 0.3em;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        border-radius:10px; 
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.10);
        height: 3.2em;
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

    .con-map {
        width: 100%;
        height: 300px;
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
    .sub-title {
        font-size: 0.9em;
        font-weight: 700;
    }
    .datos {
        font-size: 0.8em;
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

    .info-order {
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
    }

    .link-envio {
        
    }

    ` 