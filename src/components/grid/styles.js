import styled from "styled-components"

export const table = styled.table`
    width: 95%;
    background-color: #fff;
    padding: 2rem;
    box-shadow: 0rem 0rem .5rem #ccc;
    border-radius: .5rem;
    max-width: 112rem;
    margin: 2rem auto;
`

export const tHead = styled.thead``
export const tBody = styled.tbody``
export const tR = styled.tr``

export const tH = styled.th`
    border-bottom: inset;
    padding-bottom: .5rem;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width+"%" : "auto")};
`

