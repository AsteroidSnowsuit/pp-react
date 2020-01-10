import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import Axios from 'axios';
import * as Cookies from 'js-cookie'

export class Admin extends Component {

    componentDidMount() {
        Axios.get('http://localhost:8000/api/details', {headers: {"Accept": 'application/json', "Authorization": `Bearer ${Cookies.get('token')}`}}).then(
            (success) => {
                this.setState({
                    admin : success.data.data.user.admin
                })
                if(success.data.data.user.admin == 0) {
                    this.props.history.push('/tableaudebord');
                }
            }, (error) => {
                this.props.history.push('/');
            }
        )
    }

    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>        
            )
    }
}

export default withRouter(Admin)
