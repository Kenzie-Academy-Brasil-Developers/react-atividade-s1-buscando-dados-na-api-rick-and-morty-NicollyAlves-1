import styled from "styled-components";

export const Titulo = styled.h1 `
    display: flex;
    justify-content: center;
    align-items: center;
    color: gray;
`

export const Ul = styled.ul `
    display: flex;
    flex-direction: row;
    width: 90vw;
    flex-wrap: wrap;
    margin: 0 auto;
`

export const Card = styled.li `
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 250px;
    margin-right: 10px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    border-radius: 2px;

    img {
        width: 200px;
        height: 200px;
        padding: 15px;
        border-radius: 20px;
    }

    h2 {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        color: #f5f5f5;
    }
`

