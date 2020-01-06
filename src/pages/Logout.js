import React, { Component } from 'react'
import * as Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import Axios from 'axios';


export class Logout extends Component {
    render() {
        var token = Cookies.get('token');
        Axios.get('http://localhost:8000/api/logout', 
        {
            headers: {
                "Accept": 'application/json', 
                "Authorization": `Bearer ${token}`}
            })
        .then((success) => {
            Cookies.remove('organism');
            Cookies.remove('token');
            Cookies.remove('organismCreated');
            this.props.history.push("/");
        })
        .catch((error) => {
            Cookies.remove('organism');
            Cookies.remove('token');
            Cookies.remove('organismCreated');
            this.props.history.push("/");
        })
        return <p>Déconnexion...</p>
    }
}

export default withRouter(Logout)
