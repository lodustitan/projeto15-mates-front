/* Tools */
import styled from "styled-components";

/* Hooks */
import { useState } from "react";

/* Components */
import BibliotecaList from "../components/BibliotecaList";

/* Others */

function MyGames(){
    return (
        <Style>
            <span>Biblioteca</span>
            <BibliotecaList />
        </Style>
    );
}

const Style = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #222;
    
    & > span { 
        color: white;
        font-size: 2rem;
    }
`;

export default MyGames;