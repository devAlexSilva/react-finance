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
    width: 3rem;
    height: 3rem;
  }
  span {
    margin-left: 0.8rem;
    color: #1e255e;
    font-weight: 600;
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
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    width: 80%;
    h1 {
      color: #1e255e;
      font-size: 6rem;
    }
    p {
      margin: 2rem 0;
      color: rgba(30, 37, 94, 0.7);
      font-size: 1.6rem;
    }
  }
`;
export const sectionRight = styled.section`
  width: 50%;
  height: 100%;
  background-color: #0061fe;
`;
