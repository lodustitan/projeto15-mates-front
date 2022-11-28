import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useState, useContext } from "react";

/* Others */


export default function Login() {

    const Navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

  function sendLogin(event) {
    event.preventDefault();
    const info = { email: email, password: password };
    const promisse = axios.post("http://localhost:5000/signin", info);
    promisse.then((res) => {
		sessionStorage.setItem("uid", res.data.token);
		sessionStorage.setItem("uname", res.data.user);
		Navigate("/home");
    });
    promisse.catch((err) => {
      console.log(err);
    });
  }

  return (
    <Container>
      
      <form onSubmit={sendLogin}>
      <h3>Bem-vindo ao MaTes</h3>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Senha"
        />
        <Button type="submit"><h1>Entrar</h1></Button>
        <Link to={"/register"}>
          <h2>Primeira vez? Cadastre-se!</h2>
        </Link>
      </form>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #000300;

  h3{
    font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 24px;
margin-bottom:15px;


color: #FFFFFF
  }

  h2{
    font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;

color: #FFFFFF;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 547px;
    height: 300px;

    background: #3c3c3c;
  }
  input {
    width: 268px;
    height: 48px;
    border: 3px solid #ffffff;
    border-radius: 5px;
    margin-bottom: 12px;

    background: #3C3C3C;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;

    color: #ffffff;
  }
`;



const Button = styled.button`

width: 268px;
height: 48px;
background: #FFFFFF;
border-radius: 5px;
display:flex;
justify-content:center;
align-items:center;
margin-bottom: 25px;
h1{
    font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;

color: #000000;
}
`