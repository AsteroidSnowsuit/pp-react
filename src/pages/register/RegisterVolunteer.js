import React, { Component } from 'react'
import HomepageNavigation from '../../components/navigation/HomepageNavigation';

export class RegisterVolunteer extends Component {
    render() {
        return (
            <div className="container">
                <HomepageNavigation />
                <section className="section has-text-centered">
                    <h1 className="title is-size-1 register-title">Je suis un bénévole</h1>
                    <p>Clique sur les lignes pour y ajouter tes informations.</p>
                    <form class="register-form">
                        <p className="is-size-4">Je m'appelle <input type="text" name="firstname" placeholder="prénom" /> <input type="text" name="lastname" placeholder="nom de famille" /></p>
                        <p className="is-size-4">Je suis né le <input type="date" name="dateofbirth"></input> et mon adresse est <input type="text" name="address" placeholder="adresse" /></p>
                        <p className="is-size-4">Mon adresse email est le <input type="email" name="email" placeholder="adresse email" /></p>
                    </form>
                    <h2 className="register-title subtitle is-size-3">Mes centres d'intérêts</h2>
                    <p>Sélectionne tous tes intérêts en cliquant desuss.</p>
                    <div className="columns register-columns is-multiline column is-offset-1 is-10">
                        <div className="column interest-box is-one-fifth"><div className="interest-box-content"></div></div>
                        <div className="column interest-box is-one-fifth"></div>
                        <div className="column interest-box is-one-fifth"></div>
                    </div>
                </section>
            </div>
        )
    }
}

export default RegisterVolunteer
