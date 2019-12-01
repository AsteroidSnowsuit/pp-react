import React, { Component} from 'react'
import {withRouter} from 'react-router-dom'
import HomepageNavigation from '../../components/navigation/HomepageNavigation';
import Button from '../../components/Button';
import Axios from 'axios';
import ErrorLine from '../../components/ErrorLine'
import * as Cookies from 'js-cookie'
import HomepageLoading from '../loading/HomepageLoading';

export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {email: '', password: '', loading: false}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    handleSubmit(e) {
        this.setState({loading: true})
        e.preventDefault();
        Axios.post('http://localhost:8000/api/login', {email: this.state.email, password: this.state.password}, {headers : {Accept: 'application/json'}})
        .then((success) => {
            Cookies.set('token', success.data.data.token);
            Cookies.set('organism', success.data.data.organismMember);
            this.props.history.push("/tableaudebord")
        }, (error) => {
            this.setState({loading: false})
            this.setState({'errors' : error.response.data.data})
        });
    }

    render() {
        return (
            <HomepageLoading loading={this.state.loading}>
            <div className="container fullheight">
                <HomepageNavigation />
                <div className="columns has-text-centered">
                    <div className="column is-vcentered is-4 is-offset-4 is-10-mobile is-offset-1-mobile">
                    <h1 className="title">Connexion</h1>
                    <img src={require('../../img/logo.svg')}></img>
                    <form className="login-form user-form fullbox-form" onSubmit={this.handleSubmit}>
                        <input name="email" value={this.state.email} onChange={this.handleChange} type="text" placeholder="Adresse email"></input><br />
                        <input name="password" value={this.state.password} onChange={this.handleChange} type="password" placeholder="Mot de passe"></input><br />
                        {(this.state.errors != undefined) ? Object.keys(this.state.errors).map((key, index) => (<ErrorLine>{this.state.errors[key]}</ErrorLine>)) : ""}
                        <Button type="primary">Se connecter</Button>
                    </form>
                </div>
                </div>
            </div>
            </HomepageLoading>
        )
    }
}

export default withRouter(Login)
