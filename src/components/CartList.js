/* Tools */
import styled from "styled-components";

/* Hooks */

/* Components */
import CartItem from "./CartItem";
import Button from "./Button";
import Label from "./Label";

/* Others */

function CartList(){
    return (
        <Style>
            <div className="cartListC_list">
                <CartItem title="God of War 5" price={149.00} />
                <CartItem title="Fifa 27" price={149.00} />
                <CartItem title="Call of Duty: Modern Warfare V" price={149.00} />
                <CartItem title="Apex Legends Premium" price={149.00} />
                <CartItem title="Overwatch 4" price={149.00} />
                <CartItem title="Grand Theft Auto 7" price={149.00} />
                <CartItem title="Grand Theft Auto 6" price={149.00} />
                <CartItem title="Grand Theft Auto 5" price={149.00} />
            </div>
            <div className="cartListC_totalCost">
                <Button color="#1EC82F">Finalizar compra</Button>
                <Label color="#4C4C4C">Total: <span className="cartListC_spanGreen">R$ {(149.00 * 8).toFixed(2)}</span></Label>
            </div>
        </Style>
    );
}

const Style = styled.div`
    width: 581px;
    height: 558px;
    padding: 1rem;
    background-color: #3C3C3C;

    .cartListC_totalCost {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        height: 20%;
    }
    .cartListC_list {
        height: 80%;
        overflow-y: auto;
        &::-webkit-scrollbar {
            width: 0;
        }
    }
    .cartListC_spanGreen {
        color: #1EC82F
    }
`;

export default CartList;