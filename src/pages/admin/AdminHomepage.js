import React, { Component } from 'react'
import Admin from './Admin'
import {Link} from 'react-router-dom'

export class AdminHomepage extends Component {
    render() {
        return (
            <Admin>
                <h1 className="title">Actions disponibles</h1>
                <Link to="/admin/organismes/verifier">Vérifier les organismes</Link>
            </Admin>
        )
    }
}

export default AdminHomepage
