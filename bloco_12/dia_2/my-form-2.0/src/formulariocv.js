import React, { Component } from 'react';


class Formulario extends Component {
    
    constructor() {
        super()

        //this.handleTextAreaChange = this.handleTextAreaChange.bind(this)

        this.state = {
            nome: '',
            email: '',
            cpf: 0,
            endereco: '',
            cidade: '',
            resumoCv: '',
            descricaoCargo:'',
            cargo: ''
        }
    }

    render() {
        return (
            <form>
                <fieldset>
                    <label for="nome">Nome Completo
                        <input type="text" name="nome" id="nome" maxlength="40" placeholder="Digite seu nome completo"
                            normalize={value => (value || '').toUpperCase()} value={this.state.nome}required />
                    </label>
                    <label for="email">Email
                        <input type="text" name="email" id="email" maxlength="50" value={this.state.email} required />
                    </label>
                    <label for="cpf">CPF
                        <input type="number" name="cpf" id="cpf" maxlength="11" value={this.state.cpf} required />
                    </label>
                    <label for="endereco">Endereço
                        <input type="text" name="endereco" id="endereco" maxlength="200" value={this.state.endereco} required />
                    </label>
                    <label for="cidade">Cidade
                        <input type="text" name="cidade" id="cidade" maxlength="28" value={this.state.cidade} required />
                    </label>
                    <label for="estado">Estado
                        <select id="estado" name="estado" required>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </select>
                    </label>
                    <label for="casa" >Casa
                        <input type="radio" name="moradia" id="casa" value="casa" required />
                    </label>
                    <label for="apartamento">Apartamento
                        <input type="radio" name="moradia" id="apartamento" value="apartamento" required />
                    </label>
                </fieldset>
                <fieldset>
                    <label for="resumoCv">Resumo do Currículo
                        <textarea name="resumoCv" id="resumoCv" maxlength="1000" value={this.state.resumoCv} required />
                    </label>
                    <label for="cargo">Cargo
                        <textarea name="cargo" id="cargo" maxlength="40" value={this.state.cargo} required />
                    </label>
                    <label for="descricaoCargo">Descrição do Cargo
                        <textarea name="descricaoCargo" id="descricaoCargo" maxlength="500" value={this.state.descricaoCargo} required />
                    </label>
                </fieldset>
                <div>
                    <button>Gerar Currículo</button>
                </div>
                <div>
                    <button>Limpar</button>
                </div>

            </form>
        )
    }
}




export default Formulario;