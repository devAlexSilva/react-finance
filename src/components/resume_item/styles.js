import styled from "styled-components";

export const container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: .5rem;
    padding: .5rem 1.5rem;
    margin-top: 10rem;
    width: 30%;

    @media (max-width: 750px){
        width: 32%;

        p {
            font-size: 1.2rem;
        }

        span {
            font-size: 2rem;
        }

        svg {
            display: none;
        }
    }
`

export const header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 1rem;
    margin: 2rem 0;

    svg {
        width: 2.5rem;
        height: 2.5rem;
    }
`

export const headerTitle = styled.p`
    font-size: 2rem;
`

export const total = styled.span`
    font-size: 3rem;
    font-weight: bold;
`