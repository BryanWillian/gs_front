import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useAuth from '../../hooks/useAuth';

const CadastroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 20px auto; 
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 15vh auto ;

`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color:#1dc2a6;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1dc2a6;
  }
`;

const LoginPageLink = styled.div`
  margin-top: 10px;
  text-align: center;

  a {
    color: #1dc2a6;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;

const Footer = styled.div`
  margin-top: auto;
`;

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    try {
      if (!email || !nome || !senha) {
        setError('Preencha todos os campos');
        return;
      }

      const response = await fetch('http://localhost:3002/cadastros', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          nome,
          senha,
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar usuário');
      }

      // Redirecione para a página de login após o cadastro bem-sucedido
      alert('Usuário cadastrado com sucesso!');
      navigate('/sign-in');
    } catch (error) {
      console.error('Erro ao cadastrar:', error.message);
      setError('Erro ao cadastrar usuário');
    }
  };

  return (
    <CadastroContainer>
      <h2>Cadastre-se</h2>
      <Input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
      <Input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <div>{error}</div>
      <Button onClick={handleSignup}>Cadastrar</Button>
      <LoginPageLink>
        Já tem uma conta? <Link to="/sign-in">Faça login</Link>
      </LoginPageLink>
      <Footer /> 
    </CadastroContainer>
  );
};

export default Signup;
