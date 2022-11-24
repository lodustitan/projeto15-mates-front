/* Tools */
import styled from "styled-components";

/* Hooks */

/* Components */
import CartList from "../components/CartList";

/* Others */

function Cart(){
    return (
        <Style>
            <span>Carrinho</span>
            <CartList />
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

export default Cart;