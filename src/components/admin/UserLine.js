import React, { Component } from 'react'
import Axios from 'axios'
import Cookies from 'js-cookie'

export class UserLine extends Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin() {
        Axios.get('http://localhost:8000/api/god/login/' + this.props.user.id, {headers : {Accept: 'application/json'}})
        .then((success) => {
            Cookies.set('token', success.data.data.token);
            Cookies.set('organism', success.data.data.organismMember);
            Cookies.set('organismCreated', success.data.data.organismCreated);
            window.location.reload();
        })
    }
    render() {
        return (
            <div>
                {this.props.user.email}
                {(this.props.user.organismMember == 1 ? ' (ORGANISME) ': ' (UTILISATEUR) ')}
                <a href="#" onClick={this.handleLogin}>SE CONNECTER</a>
            </div>
        )
    }
}

export default UserLine
