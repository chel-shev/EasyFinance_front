import React, {Component} from 'react'
import './LoginPage.scss';
import '../patterns.scss';
import LoginForm from "./LoginForm";
import SocialNetwork from "./SocialNetwork";
import {loginUser} from '../redux/actions'


export default class LoginPage extends Component {

    render() {
        const {dispatch, isAuthenticated, errorMessage} = this.props

        return (
            <div className='login'>
                <div className="login__welcome">
                    <div className="login__welcome-text">Welcome to</div>
                    <div className="login__app-name">Easy<br/>Finance</div>
                    <div className="login__quote">“Rule No.1: Never lose money.<br/>
                        &nbsp;Rule No.2: Never forget rule No.1.”
                    </div>
                    <div className="login__quote-author">— Warren Buffett</div>
                </div>
                <div className="login__page">
                    <div className="login__logo">
                    </div>
                    <LoginForm errorMessage={errorMessage}
                               onLoginClick={creds => dispatch(loginUser(creds))}/>
                    <div className="login__or">or</div>
                    <SocialNetwork/>
                </div>
            </div>)
    }
}