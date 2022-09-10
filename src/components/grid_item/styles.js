import styled from "styled-components";

export const tR = styled.tr``

export const tD = styled.td`
    padding-top: 1.5rem;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    word-break: break-all;

    svg {
        width: 1.8rem;
        width: 1.8rem;
    }
`