/* Tools */
import styled from "styled-components";

/* Hooks */

/* Components */
import Button from "./Button";
import Label from "./Label";

/* Others */

function GameBuy(){
    return (
        <Style>
            <span className="gameBuyC_buyGameTitle">
                God of War
            </span>
            <div className="gameBuyC_floatBoxButtonPanel">
                <Label color="#2c2c2c">R$ 149,00</Label>
                <Button color="green">Comprar</Button>
            </div>
        </Style>
    );
}

const Style = styled.div`
    margin-top: 2rem;
    width: 454px;
    height: 98px;
    background-color: #3C3C3C;
    color: white;

    padding: 1rem;
    position: relative;
    .gameBuyC_floatBoxButtonPanel {
        position: absolute;
        display: flex;
        justify-content: space-between;
        width: 260px;
        height: 48px;
        bottom: -1rem;
        right: 1rem;
    }
    .gameBuyC_buyGameTitle {
        font-size: 2rem;
    }
`;

export default GameBuy;