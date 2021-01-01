import React from "react";
import './SocialNetwork.scss';

class SocialNetwork extends React.Component {

    render() {
        return (
            <div className="login__social-network">
                <div className="login__vk"></div>
                <div className="login__fb"></div>
                <div className="login__instagram"></div>
                <div className="login__twitter"></div>
            </div>
        );
    }
}

export default SocialNetwork;