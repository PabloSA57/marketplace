import styled from "styled-components";


export const FormStyle = styled.div`
    width: 480px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    display: block;
    border-radius: 15px;


.loading {
    background-color: aliceblue;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
}

.switch {
    flex-direction: row;
    justify-content: space-between;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

@media only screen and (max-width: 500px) {
            width: 100%;
            height: 100%;
            overflow: auto;
        }
    
        .div-row {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }

`