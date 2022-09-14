import styled from "styled-components";

export const tR = styled.tr`
  :nth-child(odd) {
    background-color: lightgray;
  }

`;

export const tD = styled.td`
  padding: 1rem 0.5rem;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  word-break: break-all;

  border: 0.05rem solid black;
  svg {
    width: 1.8rem;
    width: 1.8rem;
  }
`;
