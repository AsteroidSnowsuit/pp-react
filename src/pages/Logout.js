import React, { Component } from 'react'
import * as Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import Axios from 'axios';

export class Logout extends Component {
    render() {
        Axios.get('http://localhost:8000/api/logout', {}, {headers: {Accept: 'application/json', Authorization: 'Bearer ' . Cookies.get('token')}}).then((success) => {
            Cookies.remove('token');
            //this.props.history.push("/");
            console.log('test')
        })
        console.log('test 2')
        return <p>Déconnexion...</p>
    }
}

export default withRouter(Logout)
