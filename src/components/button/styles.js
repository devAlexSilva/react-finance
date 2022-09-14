import styled from "styled-components";

export const button = styled.button`
  padding: 1.6rem 2rem;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  width: 100%;
  cursor: pointer;
  background-color: ${(props) =>
    props.backColor ? `${props.backColor}` : "#046ee5"};
  color: white;
  font-weight: 600;
  font-size: 1.6rem;
  max-width: 35rem;
  transition: all 200ms cubic-bezier(0.23, 1, 0.32, 1);
  will-change: transform;

  :hover {
    background-color: #1a1a1a;
    box-shadow: rgba(0, 0, 0, 0.25) .8rem 1.8rem .6rem;
    transform: translateY(-0.3rem);
  }
`;