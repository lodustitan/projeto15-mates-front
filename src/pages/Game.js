/* Tools */
import axios from "axios";
import styled from "styled-components";

/* Hooks */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

/* Components */
import GameDetails from "../components/GameDetails";
import GameBuy from "../components/GameBuy";
import Loading from "../components/Loading";

/* Others */


function Game(){

    const params = useParams();
    const [gameInfos, setGameInfos] = useState();

    useEffect(()=>{
        axios.get(`http://localhost:5000/game/${params.id}`)
            .then(res => {
                setGameInfos(res.data);
            })
            .catch(err => {
                console.error(err);
            })
    }, [])

    return(
        <Style>
            {gameInfos?
                <>
                    <span>{gameInfos.name}</span>
                    <GameDetails dev={gameInfos.developer} dist={gameInfos.dist} genre={gameInfos.genre} img={gameInfos.banner}>
                        {gameInfos.description}
                    </GameDetails>
                    <GameBuy title={gameInfos.name} price={gameInfos.price} />
                </>: <Loading />
            }
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

export default Game;