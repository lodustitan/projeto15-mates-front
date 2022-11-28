/* Tools */
import axios from "axios";
import styled from "styled-components";

/* Hooks */
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

/* Components */
import BibliotecaItem from "./BibliotecaItem";

/* Others */

function BibliotecaList(){

    const navigate = useNavigate();
    const [myGamesItems, setMyGamesItems] = useState();

    function checkout(){
        axios.post("https://mates-back.onrender.com/checkout", {user_id: sessionStorage.uid})
            .then(res => navigate("/checkout", {state: myGamesItems}))
        
    }

    useEffect(()=>{
        axios.get("https://mates-back.onrender.com/mygames", {headers: {user_id: sessionStorage.uid}})
            .then(res => {
                setMyGamesItems(res.data);
            });
    }, [])

    return (
        <Style>
            <div className="cartListC_list">
                {myGamesItems && myGamesItems.map(item => <BibliotecaItem title={item.name} img={item.poster} />)}
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

export default BibliotecaList;