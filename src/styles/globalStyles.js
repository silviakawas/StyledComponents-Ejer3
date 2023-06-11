import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body{
        font-family: sans-serif;
        background-image: url("./public/bg-main-desktop.png");
        background-repeat: no-repeat;
    }

    .container{
        width: 1440px;
        height: 100vh;
        margin: auto;
        display: flex;
        flex-direction: row;
        
        align-items: center;
        justify-content: center;
        gap: 130px;
    }
    .containerCards{
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
    .containerForm{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export {GlobalStyles};