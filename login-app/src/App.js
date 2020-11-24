import React, { Component} from 'react';
import './App.css';
import { Button , Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';
import Logo from './img/login.svg'; 

function App() {
  return (
    <Form className="login-form">
      <h1>
        <span className="font-weight-bold">seusite</span>.com.br
      </h1>
      <h2 className="text-center">Bem vindo</h2>
      <img src={Logo} height={300} alt="logo"/>
      <FormGroup>
        <Label >Email</Label>
        <Input type="text" placeholder="Seu email"/>
      </FormGroup>
      <FormGroup>
        <Label >Senha</Label>
        <Input type="password" placeholder="Sua senha"/>
      </FormGroup> 
      <Button className="btn-lg btn-dark btn-block">
      Login
      </Button>
      <div className="text-center pt-3">
        Ou continue com outra rede social
      </div>
      <FacebookLoginButton text="Login com o Facebook" className="mt-3 mb-3"/>
      <div className="text-center">
        <a href="/sign-up">Cadastre-se</a>
        <span className="p-2">|</span>
        <a href="/sign-up">Esqueceu sua senha</a>
      </div>
    </Form>
   
  );
}

export default App;
