/* Tools */
import styled from "styled-components";

/* Hooks */

/* Components */
import CheckoutBox from "../components/CheckoutBox";

/* Others */

function Checkout(){
    return (
        <Style>
            <span>Dados de confirmação</span>
            <CheckoutBox />
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

export default Checkout;