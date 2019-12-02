import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import Dashboard from '../Dashboard'
import UserBanner from '../../components/user/UserBanner'
import UserInfo from '../../components/user/UserInfo';
import UserButtons from '../../components/user/UserButtons'
import UserActivity from '../../components/user/UserActivity'
import axios from 'axios'
import * as Cookies from 'js-cookie'

export class UserProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {firstname : '', lastname: '', occupation: '', participations: [], loading: true}
    }
    componentDidMount() {
        var token = Cookies.get('token');
        axios.get('http://localhost:8000/api/details', {headers: {"Accept": 'application/json', "Authorization": `Bearer ${token}`}}).then(
            (success) => {
                this.setState({loading: false});
                this.setState({firstname : success.data.data.user.firstname, lastname: success.data.data.user.lastname})
                this.setState({occupation : (success.data.data.user.organismMember ? 'Membre d\'un organisme' : 'Bénévole')})
                this.setState({participations : success.data.data.participations})
            }, (error) => {
                this.props.history.push('/deconnexion');
            }
        )
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
                        
                    </div>
                </div>

            </Dashboard>
        )
    }
}

export default withRouter(UserProfile)
