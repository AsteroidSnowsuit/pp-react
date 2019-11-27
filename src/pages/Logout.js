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
                this.props.history.push("/");
                Cookies.remove('token');
        })
        console.log('test 2')
        return <p>Déconnexion...</p>
    }
}

export default withRouter(Logout)
