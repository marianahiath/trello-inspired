import React, { Component } from 'react';
import Formulario from "./components/formulario";
import ListaNotas from "./components/listaNotas";
import "./assets/App.css";
import "./assets/index.css";

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      notas:[]
    };
  }

  criarNota(titulo, texto) {
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas:novoArrayNotas
    };
    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="conteudo">
        <Formulario criarNota={this.criarNota.bind(this)}/>
        <ListaNotas notas={this.state.notas}/>
      </section>
    );
  }
}