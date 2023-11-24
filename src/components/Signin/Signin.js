import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 390px; 
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 15vh auto ;
  width: 100%;
`;

const Form = styled.form`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  
  background-color: white;
 
  border-radius: 0px;
`;

const Label = styled.h2`
  font-size: 2.5rem;
  color: #2b1b5e;
  margin-bottom: 0.5em;
`;

const StyledLabel = styled.label`
  font-size: 16px;
  color: #2b1b5e;
`;


const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #1dc2a6;
  border-radius: 4px;
width: 100%;
`;

const Button = styled.button`
  background-color:#1dc2a6;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;

  &:hover {
    background-color: #1dc2a6;
  }
`;

const S = styled.p`
  margin-top: 10px;

  a {
    color: #4caf50;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`;

const SignupLink = styled.p`
  margin-top: 10px;

  a {
    color: #1dc2a6;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;


const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3002/cadastros?email=${email}&senha=${senha}`);
      const cadastros = await response.json();

      if (cadastros.length > 0) {
        console.log('Login bem-sucedido!', cadastros[0]);

        // Redireciona para a tela Home (ou outra rota desejada após o login)
        navigate('/');
      } else {
        setError('informações inválidas');
      }
    } catch (error) {
      console.error('Erro ao realizar o login', error);
      setError('Erro ao realizar o login');
    }
  };

  return (
    <Container>
      <h2>Login</h2>
      <Form>
        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
        <Button onClick={handleLogin}>Login</Button>
      </Form>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <SignupLink>
        Não tem uma conta? <Link to="/sign-up">Cadastre-se</Link>
      </SignupLink>
    </Container>
  );
};

export default Login;
