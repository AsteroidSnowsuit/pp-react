import React, { Component } from 'react'
import Dashboard from '../../Dashboard';
import Axios from 'axios';
import LinkButton from './../../../components/LinkButton'

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
        Axios.get("http://localhost:8000/api/interests")
        .then((success) => {
            this.setState({interests: success.data.data.interests})
        }, (error) => {

        })
    }
    render() {
        return (
            <Dashboard>
                <LinkButton type="primary" size="medium" destination="/admin/interests/store">Ajouter un intérêt</LinkButton>
            </Dashboard>
        )
    }
}

export default InterestsIndex
