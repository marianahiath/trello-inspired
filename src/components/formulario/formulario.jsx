import React, { Component } from "react";
import "./styleFormulario.css";

export default class Formulario extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titulo: "",
            texto: ""
        }
    }

    _handleMudancaTitulo(evento) {
        evento.stopPropagation();
        this.setState({titulo: evento.target.value, texto: this.state.texto})
    }

    _handleMudancaTexto(evento) {
        evento.stopPropagation();
        this.setState({titulo: this.state.titulo, texto: evento.target.value})
    }

    _criarNota(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.state.titulo, this.state.texto);
        this.setState({titulo: "", texto: ""});
    }

    render() {
        return (
            <form className="form-cadastro"
            onSubmit={this._criarNota.bind(this)}>
                <input
                    type="text"
                    placeholder="Título"
                    className="form-cadastro_input"
                    value={this.state.titulo}
                    onChange={this._handleMudancaTitulo.bind(this)}

                />
                <textarea
                    rows={15}
                    placeholder="Escreva sua nota..."
                    className="form-cadastro_input"
                    value={this.state.texto}
                    onChange={this._handleMudancaTexto.bind(this)}
                />
                <button className="form-cadastro_input form-cadastro_submit">
                    Criar Nota
                </button>
            </form>
        );
    }
}