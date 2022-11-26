/* Tools */
import styled from "styled-components";

/* Hooks */

/* Components */
import Button from "./Button";
import CartItem from "./CartItem";

/* Others */

function CheckoutBox({param}){
    return (
        <Style>
            <Infos>
                <div className="checkoutBoxC_infos">
                    <div className="checkoutBoxC_infosField">
                        <span>Nome</span>
                        <span>E-mail</span>
                        <span>Nº Telefone</span>
                        <span>Valor Total</span>
                    </div>
                    <div className="checkoutBoxC_infosValues">
                        <span>Rodolfo Barbosa</span>
                        <span>rodbarbero@gmail.com</span>
                        <span>96864864</span>
                        <span>R$ {param? (param.reduce((p,c) => p+c.price, 0)).toFixed(2): 0}</span>
                    </div>
                </div>

                <div className="checkoutBoxC_list">
                    {param && param.map(item => <CartItem title={item.name} price={item.price} />)}
                </div>
            </Infos>
            <div className="checkoutBoxC_backToHome">
                <Button color="#4c4c4c">Voltar para Home</Button>
            </div>
        </Style>
    );
}

const Style = styled.div`
    display: flex;
    width: 581px;
    height: 558px;
    padding: 1rem;
    background-color: #3C3C3C;
    .checkoutBoxC_backToHome {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        width: 100%;
    }
    
`;
const Infos = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    .checkoutBoxC_list {
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        &::-webkit-scrollbar {
            width: 0;
        }
    }
    .checkoutBoxC_infos {
        display: flex;
        height: 160px;
    }
    .checkoutBoxC_infosField {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 40%;
        padding: 1rem;
        color: white;
        font-size: 1.2rem;
    }
    .checkoutBoxC_infosValues {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 160px;
        width: 60%;
        padding: 1rem;
        color: white;
        font-size: 1.2rem;
        span {
            overflow: hidden; 
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
    
`;

export default CheckoutBox;