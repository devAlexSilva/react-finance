import styled from "styled-components";

export const header = styled.header`
  width: 80%;
  height: 4rem;
  margin-top: 3rem;
  display: flex;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  justify-content: space-between;
  background-color: inherit;
  z-index: 1;

  @media (max-width: 768px) {
    width: 95%;
    height: 2rem;
    margin-top: 2rem;
  }
`;
export const logo = styled.nav`
  display: flex;
  align-items: center;
  --span-color: ${props => props.spanColor ? `${props.spanColor}` : "#fff"};
  img {
    width: 3rem;
    height: 3rem;
  }
  span {
    margin-left: 0.8rem;
    font-weight: 600;
    color: var(--span-color);
  }
`;