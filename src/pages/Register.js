import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useState } from "react";

export default function Register() {
  const Navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cell, setCell] =useState("")
  const [password, setPassword] = useState("");

  function sendRegister(event) {
    event.preventDefault();
    const info = { 
      name: name, 
      email: email, 
      cell: cell, 
      password: password 
    };
    const promisse = axios.post("http://localhost:5000/signup", info);
    promisse.then((res) => {
      Navigate("/");
    });
    promisse.catch((err) => {
      console.log(err);
    });
  }

  return (
    <Container>
      <form onSubmit={sendRegister}>
        <h3>Insira os seus Dados!</h3>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Nome"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
        />

        <input
          onChange={(e) => setCell(e.target.value)}
          value={cell}
          placeholder="Celular"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          value={password}
          placeholder="Senha"
        />

        <Button type="submit"><h1>Cadastrar</h1></Button>
        <Link to={"/"}>
          <h2>Já tem uma conta? Entre agora!</h2>
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

  h3 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 24px;
    margin-bottom: 15px;

    color: #ffffff;
  }

  h2 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    color: #ffffff;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 547px;
    height: 500px;

    background: #3c3c3c;
  }
  input {
    width: 268px;
    height: 48px;
    border: 3px solid #ffffff;
    border-radius: 5px;
    margin-bottom: 12px;

    background: #3c3c3c;
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
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;

    color: #000000;
  }
`;
