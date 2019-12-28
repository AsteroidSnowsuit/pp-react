import React, { Component } from 'react'
import Popup from "reactjs-popup";
import UserLine from './UserLine'
import Axios from 'axios';
import Button from '../Button';
import * as Cookies from 'js-cookie'

export class AdminTools extends Component {

    constructor(props) {
        super(props);
        this.state = {users: {}}
        this.handleDisconnect = this.handleDisconnect.bind(this);
        this.loadUsers = this.loadUsers.bind(this);
    }

    loadUsers() {
        Axios.get('http://localhost:8000/api/god/users')
        .then((success) => {
            this.setState({users: success.data.data.users});
        });
        
    }
    
    handleDisconnect() {
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
            window.location.reload();
        })
        .catch((error) => {
            Cookies.remove('token');
            Cookies.remove('organism');
            window.location.reload();
        })
    }


    render() {
        return (
            <Popup trigger={<div className="admin-toolbox"></div>} onOpen={this.loadUsers} modal>
                <Button type='danger' noSubmit={true} onClick={this.handleDisconnect}>Déconnexion</Button>
                <div className="user-container">
                    {Object.keys(this.state.users).map((key, index) => {
                        return <UserLine user={this.state.users[key]}></UserLine>
                    })}
                </div>
            </Popup>
        )
    }
}

export default AdminTools
