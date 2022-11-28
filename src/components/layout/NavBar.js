import styled from "styled-components"
import { useNavigate } from "react-router-dom";

export default function NavBar(){
    const navigate = useNavigate();

    function myGames(){
        navigate("/mygames");
    }
    function carrinho(){
        navigate("/cart");
    }
    function logout(){
        sessionStorage.clear();
        navigate("/");
    }

    return (
        <Navbar>
            <h1 onClick={() => navigate("/home")}>MaTes</h1>
            {sessionStorage.uid && 
            <Panel>
                <span onClick={myGames}>Meus Jogos</span>
                <span onClick={carrinho}>Carrinho</span>
                <span onClick={logout}>Sair</span>
            </Panel>}
        </Navbar>
    )
} 

const Panel = styled.div`
    position: absolute;
    right: 1rem;
    width: 250px;
    display: flex;
    justify-content: space-between;
    color: white;
`;
const Navbar = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
  background-color: #3c3c3c;

  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 42px;

    color: #ffffff;
  }
`;