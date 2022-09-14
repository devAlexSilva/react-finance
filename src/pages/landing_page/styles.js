import styled from "styled-components";

export const container = styled.div`
  width: 100vw;
  max-width: 140rem;
  height: 100vh;
`;
export const header = styled.nav`
  width: 80%;
  height: 4rem;
  margin-top: 3rem;
  display: flex;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  justify-content: space-between;
  background-color: inherit;
  z-index: 1;
`;
export const logo = styled.div`
  display: flex;
  align-items: center;
  
  img {
    width: 4rem;
    height: 4rem;
  }
  span {
    margin-left: .8rem;
  }
`;
export const main = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
`;
export const sectionLeft = styled.section`
  width: 50%;
  height: 100%;
  background-color: lightgray;
`;
export const sectionRight = styled.section`
  width: 50%;
  height: 100%;
  background-color: lightblue;
`;
