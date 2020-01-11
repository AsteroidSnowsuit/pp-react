import React, { Component} from 'react'
import {withRouter} from 'react-router-dom'
import HomepageNavigation from '../../components/navigation/HomepageNavigation';
import Button from '../../components/Button';
import Axios from 'axios';
import ErrorContainer from '../../components/ErrorContainer'
import * as Cookies from 'js-cookie'
import HomepageLoading from '../loading/HomepageLoading';
import AdminTools from '../../components/admin/AdminTools';
import {handleChange} from 'utils'

export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {email: '', password: '', loading: false}
        this.handleChange = handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        this.setState({loading: true})
        e.preventDefault();
        Axios.post('http://localhost:8000/api/login', {email: this.state.email, password: this.state.password}, {headers : {Accept: 'application/json'}})
        .then((success) => {
            Cookies.set('token', success.data.data.token);
            Cookies.set('organism', success.data.data.organismMember);
            Cookies.set('organismCreated', success.data.data.organismCreated);
            Cookies.set('validation-pending', success.data.data.validationPending);
            this.props.history.push("/tableaudebord")
        }, (error) => {
            this.setState({loading: false})
            this.setState({'errors' : error.response.data.data})
            if(error.response.data.redirect != "") {
                this.props.history.push(error.response.data.redirect);
            }
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
                        <ErrorContainer errors={this.state.errors} />
                        <Button type="primary">Se connecter</Button>
                    </form>
                </div>
                </div>
            </div>
            <AdminTools />
            </HomepageLoading>
        )
    }
}

export default withRouter(Login)
