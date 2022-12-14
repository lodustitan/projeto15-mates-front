/* Tools */
import styled from "styled-components";

/* Hooks */

/* Components */

/* Others */

function GameDetails({children, dev, dist, img, genre}){
    return (
        <Style>
            <ImgContainer>
                <img src={img} alt="IMG" />
            </ImgContainer>
            <div className="gameDetailsC_description">
                {children}
            </div>
            <Specs>
                <div>
                    <span>Desenvolvedor:</span>
                    <span>Distribuidora:</span>
                </div>
                <div className="gameDetailsC_SpecsInfo">
                    <span>{dev}</span>
                    <span>{dist}</span>
                </div>
            </Specs>
            <div className="gameDetailsC_tags">
                <Tags>{genre}</Tags>
            </div>
        </Style>
    );
}


const Style = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 4rem;
    width: 454px;
    height: 318px;
    background-color: #3C3C3C;
    color: white;
    
    .gameDetailsC_description {
        height: 140px;
        font-size: .8rem;
        padding: .5rem 0;
    }
    .gameDetailsC_tags {
        display: flex;
        width: 100%;
        
    }
`;
const Tags = styled.div`
    padding: 4px 1rem;
    border-radius: 6px;
    background-color: #2c2c2c;
`;
const Specs = styled.div`
    display: flex;
    width: 100%;
    padding: .5rem 0;
    div {
        display: flex;
        flex-direction: column;
    }
    .gameDetailsC_SpecsInfo {
        margin-left: 1rem;
        color: #83D2FF;
    }
`;
const ImgContainer = styled.div`
    width: 100%;
    height: 92px;
    background-color: #2C2C2C;
    
    img {
        object-fit: cover;
        width: 100%;
        height: 92px;
    }
`;

export default GameDetails;