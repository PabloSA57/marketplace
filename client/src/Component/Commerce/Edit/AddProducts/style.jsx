import styled from "styled-components";

export const  AddProductStyle = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    background-color: #3b3b3b63;

    .-con{
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
    }
    .con-edit{
        background-color: #FFFFFF;
        width: 70%;
        height: 100vh;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        
    }

    .filt{ width: 50%;
    flex-direction: row;
    justify-content: space-between;
    flex-direction:row;
    overflow-x: scroll;
    overflow-y: hidden;
    gap: 7px
    }

    
    .con-edit12{
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
    }

    .con-edit13{
        flex-direction: row;
        flex-wrap: wrap;
        margin-bottom: 20px;
        gap: 2%;
        min-height: 300px;
    }
`