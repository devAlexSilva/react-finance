import styled from "styled-components";

export const button = styled.button`
  --color: ${props => (props.spanColor ? props.spanColor : "#fff")};

  background-color: transparent;
  border: 0.3rem solid #1e255e;
  border-radius: 1.8rem;
  color: var(--color);
  cursor: pointer;
  font-family: "Segoe UI", Helvetica;
  font-weight: 600;
  font-size: 1.6rem;
  outline: none;
  padding: 0.5rem 2rem;
  transition: all 200ms cubic-bezier(0.23, 1, 0.32, 1);
  will-change: transform;

  :hover {
    background-color: #1a1a1a;
    box-shadow: rgba(0, 0, 0, 0.25) 0.5rem 1.2rem 1rem;
    transform: translateY(-0.3rem);
  }

  @media (max-width: 768px) {
    color: var(--color);
  }
`;
