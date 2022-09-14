import styled from "styled-components";

export const container = styled.div`
  width: 100vw;
  height: 100vh;
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
  background-color: rgba(30, 37, 94, 0.7);
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
