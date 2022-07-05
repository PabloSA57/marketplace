import styled from "styled-components";


export const  CardCartProductStyle = styled.div`
    width: 100%;
    height: 100px;
    border-bottom: 1px solid black;
    align-items: center;
    justify-content: center;
    
    .con0 {
        width: 100%;
    }
    .con{
    width: 95%;
    height: 90%;
    flex-direction: row;
    align-items: center;
    }

    .con1, .con12{
        width: 50%;
        flex-direction: row;

    }

    .con12{
        justify-content: space-between;
    }
    .imgdiv img{
        width: 40px;
        height: 40px;
        margin-right: 10px;
    }

    .con-btndelete {
        width: 60px;
    }

    .btn-delete {
        color: blue;
        cursor: pointer;
    }
    `