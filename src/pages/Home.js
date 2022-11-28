import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import kratos from "../img/1173124.jpg";
import axios from "axios";
import { useState, useEffect } from "react";

import NavBar from "../components/layout/NavBar";


export default function Home() {
	const navigate = useNavigate();
  const [destaques,setDestaques]=useState(true)
  const [aventura,setAventura]=useState(false)
  const [esporte,setEsporte]=useState(false)
  const [corrida,setCorrida]=useState(false)
  const [rpg,setRpg]=useState(false)

  const [games, setGames] =useState([])
  
  const [destaquesC,setDestaquesC]=useState([])
  const [destaquesC2,setDestaquesC2]=useState([])
  const [destaquesC3,setDestaquesC3]=useState([])
  const [aventuraC,setAventuraC]=useState([])
  const [esporteC,setEsporteC]=useState([])
  const [corridaC,setCorridaC]=useState([])
  const [rpgC,setRpgC]=useState([])

  function destaqueVision(){
    setDestaques(true)
    setAventura(false)
    setCorrida(false)
    setEsporte(false)
    setRpg(false)
  }
  function aventuraVision(){
    setDestaques(false)
    setAventura(true)
    setCorrida(false)
    setEsporte(false)
    setRpg(false)
  }
  function corridaVision(){
    setDestaques(false)
    setAventura(false)
    setCorrida(true)
    setEsporte(false)
    setRpg(false)
  }
  function esporteVision(){
    setDestaques(false)
    setAventura(false)
    setCorrida(false)
    setEsporte(true)
    setRpg(false)
  }
  function rpgVision(){
    setDestaques(false)
    setAventura(false)
    setCorrida(false)
    setEsporte(false)
    setRpg(true)
  }
  function goToGame(game_id){
	navigate(`/game/${game_id}`);
  }

  useEffect(()=>{
    const url = "https://mates-back.onrender.com/games";

	if(sessionStorage.uid === undefined){
		navigate("/");
	}

    const promisse = axios.get(url)
    promisse.then((res)=>{
       console.log("bresque", res.data)
        setGames(res.data)
		const gamesImported = res.data;

		const aventuradb = gamesImported.filter(({genre})=> genre ==="aventura")
		setAventuraC(aventuradb)
		const corridadb = gamesImported.filter(({genre})=> genre ==="corrida")
		setCorridaC(corridadb)
		const rpgdb = gamesImported.filter(({genre})=> genre ==="RPG")
		setRpgC(rpgdb)
		const esportedb = gamesImported.filter(({genre}) => genre ==="esportes")
		setEsporteC(esportedb)
		const destaquedb = gamesImported.filter(({id}) => id === 1)
		setDestaquesC(destaquedb)
		const destaquedb2 = gamesImported.filter(({id}) => id === 4)
		setDestaquesC2(destaquedb2)
		const destaquedb3 = gamesImported.filter(({id}) => id === 12)
		setDestaquesC3(destaquedb3)

    })
    promisse.catch((erro)=>{
        console.log(erro.response.data)
    })
  },[])
  

  return (
    <Conteiner>
      <Destaque>
        <Spotlight>
          <img src={kratos}></img>
          <h1>Destaque: God of War: Ragnarök</h1>
        </Spotlight>
      </Destaque>
      <Work>
        <Categories>
          <h2>Categorias</h2>
          <button onClick={destaqueVision}>Destaques</button>
          <button onClick={aventuraVision}>Aventura</button>
          <button onClick={corridaVision}>Corrida</button>
          <button onClick={esporteVision}>Esporte</button>
          <button onClick={rpgVision}>RPG</button>
        </Categories>
        <Games>
        <Destaques destaques = {destaques}>
        {destaquesC && destaquesC.map((g) => (<Game onClick={() => goToGame(g.id)}>
              <img src={g.poster}></img>
              <Details>
                <h1>{g.name}</h1>
                <h2>{g.genre}</h2>
                <h3>R$ {(g.price).toFixed(2)}</h3>
              </Details>
            </Game>
              ))}
          {destaquesC2 && destaquesC2.map((g) => (<Game onClick={() => goToGame(g.id)}>
              <img src={g.poster}></img>
              <Details>
                <h1>{g.name}</h1>
                <h2>{g.genre}</h2>
                <h3>R$ {(g.price).toFixed(2)}</h3>
              </Details>
            </Game>
              ))}
            {destaquesC3 && destaquesC3.map((g) => (<Game onClick={() => goToGame(g.id)}>
              <img src={g.poster}></img>
              <Details>
                <h1>{g.name}</h1>
                <h2>{g.genre}</h2>
                <h3>R$ {(g.price).toFixed(2)}</h3>
              </Details>
            </Game>
              ))}
          </Destaques>
          <Aventura aventura ={aventura}>
            {aventuraC.map((g) => (<Game onClick={() => goToGame(g.id)}>
              <img src={g.poster}></img>
              <Details>
                <h1>{g.name}</h1>
                <h2>{g.genre}</h2>
                <h3>R$ {(g.price).toFixed(2)}</h3>
              </Details>
            </Game>
              ))}
          </Aventura>
          <Esportes esporte = {esporte}>
          {esporteC.map((g) => (<Game onClick={() => goToGame(g.id)}>
              <img src={g.poster}></img>
              <Details>
                <h1>{g.name}</h1>
                <h2>{g.genre}</h2>
                <h3>R$ {(g.price).toFixed(2)}</h3>
              </Details>
            </Game>
              ))}
            
          </Esportes>
          <Corrida corrida ={corrida}>
          {corridaC.map((g) => (<Game onClick={() => goToGame(g.id)}>
              <img src={g.poster}></img>
              <Details>
                <h1>{g.name}</h1>
                <h2>{g.genre}</h2>
                <h3>R$ {(g.price).toFixed(2)}</h3>
              </Details>
            </Game>
              ))}
          </Corrida>
          <RPG rpg ={rpg}>
          {rpgC.map((g) => (<Game onClick={() => goToGame(g.id)}>
              <img src={g.poster}></img>
              <Details>
                <h1>{g.name}</h1>
                <h2>{g.genre}</h2>
                <h3>R$ {(g.price).toFixed(2)}</h3>
              </Details>
            </Game>
              ))}
          </RPG>
        </Games>
      </Work>
    </Conteiner>
  );
}

const Conteiner = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  background-color: #000300;
`;
const Destaque = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #000300;
`;

const Spotlight = styled.div`
	position: relative;
	width: 100%;
	height: 630px;
	background-color: transparent;
	img {
		height: 630px;
		width: 100%;
		object-fit: cover;
		object-position: 0px -60px;
		-webkit-box-shadow: inset 0 -200px 10px -10px #000000, 0 0 0 0 rgba(0,0,0,0);
		box-shadow: inset 0 -200px 10px -10px #000000, 0 0 0 0 rgba(0,0,0,0);
	}
  h1 {
    position: absolute;
    bottom: 5px;
    left: 15px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 42px;

    color: #000300;
  }
`;
const Work = styled.div`
  margin-top: 25px;
  margin-left: 25px;
  display: flex;
  align-items: left;
  justify-content: left;
`;

const Categories = styled.div`
  width: 200px;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #3c3c3c;

  button {
    margin-bottom: 10px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    background-color: #3c3c3c;
    border-radius:5px;
    color: #abd7ff;
  }
  h2 {
    margin-bottom: 30px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;

    color: #abd7ff;
  }
`;

const Games = styled.div`
  margin-left: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    color: #abd7ff;
  }
`;

const Game = styled.div`
  width: 333px;
  height: 232px;
  margin-right: 60px;
  display: flex;
  justify-content: space-around;
  background-color: #3c3c3c;

  img {
    margin-top: 25px;
    width: 131px;
    height: 190px;
  }
`;
const Details = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  width: 40%;
  h1 {
    margin-right: 25px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
  }
  h2 {
    background: #2c2c2c;
    border-radius: 4px;
    margin-top: 5px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;

    color: #ffffff;
  }

  h3 {
    margin-top: 130px;
    margin-left: 0px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    background: #2c2c2c;
    border-radius: 4px;

    color: #ffffff;
  }
`;

const Destaques = styled.div`
  display: ${({ destaques }) => (destaques ? "flex" : "none")};
`;
const Aventura = styled.div`
  display: ${({ aventura }) => (aventura ? "flex" : "none")};
`;
const Esportes = styled.div`
  display: ${({ esporte }) => (esporte ? "flex" : "none")};
`;
const Corrida = styled.div`
  display: ${({ corrida }) => (corrida ? "flex" : "none")};
`;
const RPG = styled.div`
  display: ${({ rpg }) => (rpg ? "flex" : "none")};
`;
