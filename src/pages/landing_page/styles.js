import styled from "styled-components";

export const container = styled.div`
  width: 100vw;
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

  @media (max-width: 768px) {
    width: 95%;
    height: 2rem;
    margin-top: 2rem;
  }
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

  @media (max-width: 768px) {
    flex-direction: column;
  }
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
    margin-top: 6rem;
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

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;

    .content {
      width: 90%;
      h1 {
        font-size: 5rem;
        margin-top: 1.5rem;
      }
      div {
        margin-bottom: 2.5rem;
      }
    }
  }

  @media (max-width: 450px) {
    .content {
        width: 95%;
        h1 {
            font-size: 4rem;
        }
    }
  }
`;
export const sectionRight = styled.section`
  width: 50%;
  height: 100%;
  background-color: #0061fe;
  display: flex;
  justify-content: center;
  align-items: center;

  .content-image {
    height: 70%;
    width: 100%;
    margin-top: 5rem;
    background-image: url("finance.jpg");
    background-size: cover;
    background-repeat: no-repeat;
  }

  @media (max-width: 768px) {
    width: 100%;

    .content-image {
      height: 100%;
      margin: 0;
      background-position: 0 -10rem;
      background-size: cover;
    }
  }

  @media (max-width: 450px) {
    .content-image {
        background-position: 0;
    }
  }
`;
