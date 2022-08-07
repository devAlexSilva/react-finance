import styled from "styled-components";

export const container = styled.div`
    max-width: 112rem;
    margin: 2rem auto;
    width: 98%;
    background-color: #fff;
    box-shadow: 0 0 .5rem #ccc;
    border-radius: .5rem;
    display: flex;
    justify-content: space-around;
    padding: 1.5rem 0;
    gap: 1rem;

    @media (max-width: 750px) {
        display: grid;
    }
`

export const inputContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const label = styled.label`
    margin-left: 3rem;
`;

export const input = styled.input`
    outline: none;
    border-radius: .5rem;
    padding: .5rem 1rem;
    font-size: 1.5rem;
    border: .1rem solid #ccc;
`

export const radioGroup = styled.div`
    display: flex;
    align-items: center;
    
    input {
        margin-left: .5rem;
        accent-color: black;
    }
`

export const button = styled.button`
    padding: .5rem 1rem;
    border: none;
    border-radius: .5rem;
    cursor: pointer;
    color: #ffffff;
    background-color: teal;
`