/* Tools */
import styled from "styled-components";

/* Hooks */

/* Components */

/* Others */

function BibliotecaItem({title, img}){
    return (
        <Style>
            <div className="cartItemC_LabelInner">
                <img src={img} alt="imagem do jogo" />
                <span className="cartItemC_title">
                    {title}
                </span>
            </div>
        </Style>
    );
}

const Style = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    background-color: #4C4C4C;
    padding: 1rem;
    .cartItemC_LabelInner {
        display: flex;
        justify-content: space-between;
        img{
            width: 140px;
            height: 200px;
        }
    }
    .cartItemC_title {
        margin-left: 1rem;
        color: white;
        font-size: 2rem;
        width: 300px; /* the element needs a fixed width (in px, em, %, etc) */
        overflow: hidden; /* make sure it hides the content that overflows */
        white-space: nowrap; /* don't break the line */
        text-overflow: ellipsis; /* give the beautiful '...' effect */
    }
    .cartItemC_price {
        color: #1EC82F;
    }

`;

export default BibliotecaItem;