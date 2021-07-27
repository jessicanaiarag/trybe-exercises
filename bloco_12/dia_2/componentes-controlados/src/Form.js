import React, { Component } from "react"
import './App.css'

class Form extends Component {
    constructor() {
        super()

        this.handleTextAreaChange = this.handleTextAreaChange.bind(this)

        this.state = {
            esttadoFavorito: '',
            nome: '',
            email: '',
            idade: 0,
            vaiComparecer: false,
            palavraChave: ''
        }
    }

    handleTextAreaChange(event) {
       this.setState({ esttadoFavorito: event.target.value })
    }

    render () {
        return (
            <div>
                <h1> Estados e React: Ferramenta incrível ou reagindo a regionalismos</h1>
                <form className="form">
                    <label>
                        Diga qual é o seu estado favorito! Do Brasil ou do React, você quem sabe!
                        <textarea name="estadoFavorito" value={this.state.esttadoFavorito} 
                        onChange={this.handleTextAreaChange} />
                    </label>

                    <label>
                    Email
                    <input name="email" type="email" />
                    </label>

                    <label>
                    Nome
                    <input name="nome" type="text" />
                    </label>
                </form>

                <label>
                    Idade
                    <input name="idade" type="number" />
                </label>

                <label>
                    Vai comparecer à conferência?
                    <input name="vaiComparecer" type="checkbox" />
                </label>

                <label>
                    Escolha a sua palavra chave favorita:
                    <select name="palavraChaveFavorira">
                        <option value="estado">Estado</option>
                        <option value="evento">Evento</option>
                        <option value="Props">Props</option>
                        <option value="hooks">Hooks</option>
                    </select>
                </label>
            </div>
        
        )
    }
}

export default Form