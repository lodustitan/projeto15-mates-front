/* Tools */
import styled from "styled-components";

/* Hooks */

/* Components */
import GameDetails from "../components/GameDetails";
import GameBuy from "../components/GameBuy";

/* Others */


function Game(){
    return(
        <Style>
            <span>God of War</span>
            <GameDetails dev="Santa Monica Studio" dist="Playstation" img="">
                Com a vingança contra os deuses do Olimpo em um passado distante, 
                Kratos agora vive como um mortal no reino dos deuses e monstros nórdicos. 
                É nesse mundo duro e implacável que ele deve lutar para sobreviver... 
                e ensinar seu filho a fazer o mesmo.
            </GameDetails>
            <GameBuy />
        </Style>
    );
}

const Style = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #222;
    
    & > span { 
        color: white;
        font-size: 2rem;
    }
`;

export default Game;