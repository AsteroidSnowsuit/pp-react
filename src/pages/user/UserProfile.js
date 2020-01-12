import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import Dashboard from '../Dashboard'
import UserBanner from '../../components/user/UserBanner'
import UserInfo from '../../components/user/UserInfo';
import UserButtons from '../../components/user/UserButtons'
import UserActivity from '../../components/user/UserActivity'
import axios from 'axios'
import * as Cookies from 'js-cookie'
import LinkButton from '../../components/LinkButton';

export class UserProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {firstname : '', lastname: '', occupation: '', participations: [], interests: {}, loading: true}
        this.getInterests = this.getInterests.bind(this);
    }
    componentDidMount() {
        var token = Cookies.get('token');
        axios.get('https://api.volontarius.com/api/details', {headers: {"Accept": 'application/json', "Authorization": `Bearer ${token}`}}).then(
            (success) => {
                this.setState({loading: false});
                this.setState({
                    firstname: success.data.data.user.firstname,
                    lastname: success.data.data.user.lastname,
                    address: success.data.data.user.address,
                    dob: success.data.data.user.dob,
                    interests: success.data.data.fullInterests
                })
                this.setState({occupation : (success.data.data.user.organismMember ? 'Membre d\'un organisme' : 'Bénévole')})
                this.setState({participations : success.data.data.participations})
            }, (error) => {
                this.props.history.push('/deconnexion');
            }
        )
    }

    getInterests() {
        var interests = (Object.keys(this.state.interests).map((key) => {
            return (<span className="interest-names" key={key}>{this.state.interests[key].name}</span>)
        }))
        interests = interests.length > 0
        ? interests.reduce((prev, curr) => <>{prev}{', '}{curr}</>)
        : null;
        return interests
    }

    render() {
        return (
            <Dashboard loading={this.state.loading}>
                <div className="user-header">
                    <UserBanner />
                    <UserInfo firstname={this.state.firstname} lastname={this.state.lastname} occupation={this.state.occupation} />
                    <UserButtons />
                </div>
                <div className="columns">
                    <div className="user-body column is-6 is-offset-1">
                        {this.state.participations.map((participation) => {
                            return <UserActivity firstname={this.state.firstname} lastname={this.state.lastname} organization={participation.offer.organization.name} title={participation.offer.name} date={participation.offer.date} />
                        })}
                        <h2 className="subtitle">Mes informations</h2>
                        <p>Ces informations ne sont pas visibles pour les autres utilisateurs. Il est important qu'elles soient exactes pour que les organismes puissent vous contacter et pour avoir des offres personnalisées.</p>
                        <span><strong>Nom complet</strong> {this.state.firstname + " " + this.state.lastname}</span><br />
                        <span><strong>Date de naissance</strong> : {this.state.dob}</span><br />
                        <span><strong>Adresse</strong> : {(this.state.address != null) ? this.state.address : "Addresse non-définie"}</span><br />
                        <span><strong>Intérêts</strong> : {this.getInterests()}</span><br /><br />
                        <LinkButton type="primary" destination="/profil/modifier">Modifier mes informations</LinkButton>
                    </div>
                </div>

            </Dashboard>
        )
    }
}

export default withRouter(UserProfile)
