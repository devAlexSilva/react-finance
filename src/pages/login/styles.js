import styled from "styled-components";

export const container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    height: 100vh;
`

export const content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2rem;
    width: 100%;
    max-width: 35rem;
    border-radius: .5rem;
    box-shadow: 0 .1rem .2rem #0003;
    background-color: white;
`

export const label = styled.label`
    font-size: 1.9rem;
    font-weight: 600;
    color: #686868;
`
export const label_register = styled.label`
    font-size: 1.5rem;
    color: #686868;
`
export const label_error = styled.label`
    font-size: 1.1rem;
    color: red;
`
export const strong = styled.strong`
    cursor: pointer;

    a {
        text-decoration: none;
        color: #686868;
    }
`