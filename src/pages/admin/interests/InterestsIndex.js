import React, { Component } from 'react'
import Dashboard from '../../Dashboard';
import Axios from 'axios';
import LinkButton from './../../../components/LinkButton'
import {Link} from 'react-router-dom'

export class InterestsIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {interests: {}}
        this.getInterests = this.getInterests.bind(this);
    }

    componentDidMount() {
        this.getInterests()
    }
    getInterests() {
        Axios.get("https://api.volontarius.com/api/interests")
        .then((success) => {
            this.setState({interests: success.data.data.interests})
        }, (error) => {

        })
    }
    render() {
        return (
            <Dashboard>
                <LinkButton type="primary" size="medium" destination="/admin/interests/store">Ajouter un intérêt</LinkButton>
                <ul>
                    {Object.keys(this.state.interests).map((key, index) => {
                        var interest = this.state.interests[key]
                        return (
                        <li key={interest.id}>
                            <Link to={"/admin/interests/" + interest.id}>{interest.name}</Link>
                        </li>
                        )
                    })}
                </ul>
            </Dashboard>
        )
    }
}

export default InterestsIndex
