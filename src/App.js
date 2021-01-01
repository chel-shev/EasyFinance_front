import './App.scss';
import React, {Component} from 'react'
import LoginPage from "./login/LoginPage";
import Quotes from "./login/Quotes";
import {connect} from 'react-redux'
import {fetchQuote, fetchSecretQuote, logoutUser} from "./redux/actions";
import LogoutButton from "./login/LogoutButton";


class App extends Component {

    render() {
        const { dispatch, quote, isAuthenticated, errorMessage, isSecretQuote } = this.props

        return (
            <div className='container'>
                {!isAuthenticated &&
                <LoginPage isAuthenticated={isAuthenticated}
                           errorMessage={errorMessage}
                           dispatch={dispatch}/>
                }
                {isAuthenticated &&
                    <LogoutButton onLogoutClick={() => dispatch(logoutUser())} />
                }
                <div className='container'>
                    <Quotes
                        onQuoteClick={() => dispatch(fetchQuote())}
                        onSecretQuoteClick={() => dispatch(fetchSecretQuote())}
                        isAuthenticated={isAuthenticated}
                        quote={quote}
                        isSecretQuote={isSecretQuote}
                    />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {

    const { quotes, auth } = state
    const { quote, authenticated } = quotes
    const { isAuthenticated, errorMessage } = auth

    return {
        quote,
        isSecretQuote: authenticated,
        isAuthenticated,
        errorMessage
    }
}

export default connect(mapStateToProps)(App)
