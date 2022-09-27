import styled from "styled-components";

export const SpinerStyle = styled.div`
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
}

.img {
    width: 100%;
    height: 100%;
}
`