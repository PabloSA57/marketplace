import styled from "styled-components";

export const SeachStyle = styled.div`
    width: 100%;
    flex-direction: row;
    gap: 2px;
    .search-inp {
        height: 20px;
        border-radius: 5px;
        padding: 0.3rem;
    }

    .search-inp:focus {
        border: 2px solid orange;
    }
    .search-btn {
        width: auto;
        border: none;
        outline: none;
        background-color: orange;
        border-radius: 5px;
    }
`