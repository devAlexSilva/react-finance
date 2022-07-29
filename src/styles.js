import { createGlobalStyle } from "styled-components";

export const global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 55.56%;
    }

    body {
        height: 100vh;
        width: 100vw;
        background-color: #f0f2f5;
        font-family: Arial, Helvetica, sans-serif;
    }
`;
