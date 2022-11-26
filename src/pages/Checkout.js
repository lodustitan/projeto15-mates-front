/* Tools */
import styled from "styled-components";

/* Hooks */
import { useLocation } from "react-router-dom";

/* Components */
import CheckoutBox from "../components/CheckoutBox";

/* Others */

function Checkout(){

    const { state } = useLocation();
    console.log(state)

    return (
        <Style>
            <span>Dados de confirmação</span>
            <CheckoutBox param={state}/>
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

export default Checkout;