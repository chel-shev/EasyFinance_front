import React, {Component} from 'react'

class LogoutButton extends Component {
    render() {
        const {onLogoutClick} = this.props

        return (
            <button onClick={() => onLogoutClick()} className="btn btn-primary">
                Logout
            </button>
        )
    }
}

export default LogoutButton;