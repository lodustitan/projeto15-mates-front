/* Tools */
import styled from "styled-components";

/* Hooks */

/* Components */
import Label from "./Label";

/* Others */

function CartItem({title, price}){
    return (
        <Style>
            <Label color="#4C4C4C">
                <div className="cartItemC_LabelInner">
                    <span className="cartItemC_title">
                        {title}
                    </span>
                    <span className="cartItemC_price">
                        R$ {price.toFixed(2)}
                    </span>
                </div>
            </Label>
        </Style>
    );
}

const Style = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    .cartItemC_LabelInner {
        display: flex;
        justify-content: space-between;
        width: 250px;
    }
    .cartItemC_title {
        width: 150px; /* the element needs a fixed width (in px, em, %, etc) */
        overflow: hidden; /* make sure it hides the content that overflows */
        white-space: nowrap; /* don't break the line */
        text-overflow: ellipsis; /* give the beautiful '...' effect */
    }
    .cartItemC_price {
        color: #1EC82F;
    }

`;

export default CartItem;