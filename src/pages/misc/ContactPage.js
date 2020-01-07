import React, { Component } from 'react'
import Homepage from '../Homepage'

export class ContactPage extends Component {
    render() {
        return (
            <Homepage>
                <h1 className="title">Me contacter</h1>
                <p>Pour tout commentaire, demande de contact, signalement de problème ou de bug, veuillez me contacter à l'adresse email : volontarius@outlook.com</p>
            </Homepage>
        )
    }
}

export default ContactPage
