import React from "react";
import Input from "./input";
import Select from "./Select";

const INITIAL_STATE = {
    email: '',
    job: '',
    name: '',
    errorEmail: '',
}

class Form extends React.Component {

    constructor() {
        super();

        this.state = INITIAL_STATE;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        const { name, value } = event.target;

        //validação
        if (name === "email" && value.length === 10) {
            console.log('Não pode ser maior que 10');
            this.setState({ errorEmail: 'Não pode ser maior que 10' });
            return;
        }
        this.setState({ [name]: value });
    };

    handleSubmit(event) {
        event.preventDefault();

        //validação

        alert("Cadastrado com sucesso!")

        this.setState(INITIAL_STATE);
    };

    render() {

        return (
            <main>
                <Form onSubmit={this.handleSubmit} >
                    <input
                        label="name"
                        name="name"
                        type="text"
                        value={this.state.name}
                        handleChange={this.handleChange}
                    />

                    <input
                        label="email"
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        isRequired={true}
                    />

                    <span>this.stage.errorEmail</span>

                    <Select
                        name="job"
                        label="Profissao"
                        value={this.state.job}
                        handleChange={this.handleChange}
                        options={["dev", "estudante", "outro"]}
                    />

                    <button type="submit" >Cadastrar</button>
                </Form>
            </main>
        )
    }
}

export default Form;