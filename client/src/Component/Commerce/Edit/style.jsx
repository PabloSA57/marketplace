import styled from "styled-components";

export const  EditProductStyle = styled.div` 
    width: 50%;
    height: 100vh;
    margin-top: 12px;

    .con{
        width: 100%;
    }

    .con1{
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 12px;
    }

    .search {

        flex-direction: row;
    }
    .search button {
        width: 25px;
        border: none;
    }
    
    .btn-add button {
        width: 100px;
        height: 25px;
        border: none;
        cursor: pointer;
    }
    .con2{
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 12px;
    }

    .con3{
        width: 100%;
    }

    .con31{
        gap: 20px;
    }

    .filt{ width: 50%;
    flex-direction: row;
    justify-content: space-between;
    flex-direction:row;
    overflow-x: scroll;
    overflow-y: hidden;
    gap: 7px
    }

    @media only screen and (max-width: 750px){
        width: 100%;
    }
    `
