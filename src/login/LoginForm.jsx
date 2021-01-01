import React, {Component} from 'react'
import './LoginForm.scss';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const username = this.refs.login;
        const password = this.refs.password;
        const creds = {username: username.value.trim(), password: password.value.trim()}
        this.props.onLoginClick(creds);
    };


    render() {
        return (
            <form className="login__form" onSubmit={this.handleFormSubmit}>
                <input className="input login__email" type="text" ref='login' placeholder="E-mail" name="username"/>
                <input className="input login__password" type="password" ref='password' placeholder="Password"
                       name="password"/>
                <input className="button login__login" type="submit" value="LOGIN"/>
                <input className="button login__sign-up" type="submit" value="SIGN UP"/>
                {this.props.errorMessage &&
                <p style={{color: 'red'}}>{this.props.errorMessage}</p>
                }
            </form>
        );
    }
}

export default LoginForm;