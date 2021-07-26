import React from "react";

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            passaword: ''
        };

        this.handleChange = this.handleChange.bind(this);
        //this.handleChangepassword = this.handleChange.bind(this);
    }

    handleChange(event) {
        //lidar com mudanças.
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    /*handleChangepassword(event) {
        //lidar com mudanças.
        this.setState({
            password: event.target.value,
        });
    }*/

    handleSubmit = (event) => {
        event.preventDefault();
        const {email} = this.state;
        alert('O login deu certo!');
    }

    render() {
        const {email} = this.state;
        const {password} = this.state; 

        return (
            <section className="login-form">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlfor="email">
                        Email:
                        <input type="email" value={email} name="email" 
                        id="email"
                        onChange= { this.handleChange } />
                    </label>
                    <label htmlfor="password">
                        Email:
                        <input type="password" value={password} name="password" 
                        id="password"
                        onChange= { this.handleChange } />
                    </label>   
                    <button type="submit">Fazer login</button>
                </form>
            </section>
        )
    }
}                

export default Login;