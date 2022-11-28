/* Tools */
import axios from "axios";
import styled from "styled-components";

/* Hooks */
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

/* Components */
import GameDetails from "../components/GameDetails";
import GameBuy from "../components/GameBuy";
import Loading from "../components/Loading";

/* Others */

function Game(){

    const params = useParams();
    const navigate = useNavigate();
    const [gameInfos, setGameInfos] = useState();

    function buyGame(){
        axios.post("https://mates-back.onrender.com/cart", {user_id: sessionStorage.uid, game_id: Number(params.id)})
        .then(res => navigate("/cart"));
    }
    
    useEffect(()=>{
        axios.get(`https://mates-back.onrender.com/game/${params.id}`, {headers: {user_id: sessionStorage.uid}})
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
                    {gameInfos.iHave? 
                    <GameBuy title={gameInfos.name} price={gameInfos.price} iHave={true} />
                    :<GameBuy onClick={buyGame} title={gameInfos.name} price={gameInfos.price} />
                    }
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
        margin: 1.5rem 0;
    }
`;

export default Game;