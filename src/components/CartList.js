/* Tools */
import axios from "axios";
import styled from "styled-components";

/* Hooks */
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

/* Components */
import CartItem from "./CartItem";
import Button from "./Button";
import Label from "./Label";

/* Others */

function CartList(){

    const navigate = useNavigate();
    const params = useParams();
    const [cartItems, setCartItems] = useState();

    function checkout(){
        axios.post("https://mates-back.onrender.com/checkout", {user_id: sessionStorage.uid})
            .then(res => navigate("/checkout", {state: cartItems}))
        
    }

    useEffect(()=>{
        axios.get("https://mates-back.onrender.com/cart", {headers: {user_id: sessionStorage.uid}})
            .then(res => {
                setCartItems(res.data);
            });
    }, [])

    return (
        <Style>
            <div className="cartListC_list">
                {cartItems && cartItems.map(item => <CartItem title={item.name} price={item.price} />)}
            </div>
            <div className="cartListC_totalCost">
                <Button color="#1EC82F" onClick={checkout}>Finalizar compra</Button>
                <Label color="#4C4C4C">Total: <span className="cartListC_spanGreen">R$ {cartItems && cartItems.reduce((p, c) => p+c.price, 0).toFixed(2)}</span></Label>
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