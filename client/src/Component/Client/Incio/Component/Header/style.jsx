import styled from "styled-components";


export const HeaderStyle = styled.header`
    width:100%;
    height: 78px;
    background-color: #FFB531;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid grey;
    justify-content: center;



    .con{
        height: 100%;
        width: 70%;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    @media (max-width: 900px) {
        .con{
            width: 90%;
        }
    }

    .coninput{
        flex-direction: row;
        align-items: center;
        width: 50%;
    }

    .coninput input {
        width: 100%;
        height: 25px;
        padding: 0;
    }

    .coninput button{
        width: 50px;
        height: 31px;
        background-color: #FFB531;
        border: none;
        border-radius: 0 2px 2px 0px;
        box-shadow: 5px 5px 5px 0px lightgray;
        color: #FFFFFF;
        align-items: center;
        justify-content: center;
    }

    .search{
        align-items: center;
    }
    .concarrito{
        flex-direction: row;
        align-items: center;
    }

    .carritonoti{
        position: absolute;
        top: -4px;
        right: -2px;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background-color: #FFB531;
        
    }

    .concarritoprecio {
        margin-left: 4px;
    }
    .carritoprecio{
        height: 16px;
    }

    .carritoprecio .name {
        font-size: 12px;
        line-height: 15px;
        font-weight: 500
    }
    .carritoprecio .precio {
        font-size: 10px;
        line-height: 15px;
        font-weight: 500
    }
    .mas{
        height: 11px;
    }

    .btnrorl{
        flex-direction: row;
        gap: 8px;
    }

    .btnrorl button{
        border: none;
        border-radius: 2px;
        padding: 5px;
        font-family: 'Nova Slim', cursive;
        font-size: 14px;
        box-shadow: 5px 5px 5px 0px lightgray;
    }

    .btnlogin{
        background-color: #FFB531;
        color: #FFFFFF;
        
    }
`