import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  height: 100vh;

  background-image: url("background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const background = styled.div`
  z-index: 1;
  position: absolute;
  height: 100vh;
  width: 100%;
  background-color: #fff;
  opacity: 0.6;
`;

export const content = styled.div`
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3.5rem;
  padding: 2rem;
  width: 100%;
  max-width: 45rem;
  border-radius: 0.5rem;
  background-color: rgba(30, 37, 94, 0.7);
`;

export const label = styled.label`
  font-size: 1.9rem;
  font-weight: 600;
  color: #fff;
`;
export const label_register = styled.label`
  font-size: 1.5rem;
  color: #fff;
`;

export const label_error = styled.label`
  font-size: 1.8rem;
  color: orange;
`

export const strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    font-size: 1.8rem;
    color: greenyellow;
    text-shadow: 0.5rem 0.5rem 0.1rem rgba(255, 255, 255, 0.4);
  }
`;
