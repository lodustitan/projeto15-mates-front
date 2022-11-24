/* Tools */
import styled from "styled-components";

/* Hooks */

/* Components */

/* Others */

function GameDetails({children, dev, dist, img}){
    return (
        <Style>
            <ImgContainer>
                <img src="https://cdn.akamai.steamstatic.com/steam/apps/1593500/header.jpg?t=1650554420" alt="IMG" />
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
                    <span>Santa Monica Studio</span>
                    <span>Playstation</span>
                </div>
            </Specs>
            <div className="gameDetailsC_tags">
                <Tags>Tiro</Tags>
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
    div {
        display: flex;
        flex-direction: column;
    }
    .gameDetailsC_SpecsInfo {
        margin-left: 1rem;
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