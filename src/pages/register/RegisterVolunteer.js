import React, { Component } from 'react'
import HomepageNavigation from '../../components/navigation/HomepageNavigation';
import InterestBox from '../../components/register/InterestBox';

export class RegisterVolunteer extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    render() {
        return (
            <div className="container">
                <HomepageNavigation />
                <section className="section has-text-centered">
                    <div className="column is-offset-1 is-10">
                    <h1 className="title is-size-1 register-title">Je suis un bénévole</h1>
                    <p>Clique sur les lignes pour y ajouter tes informations.</p>
                    <form className="register-form">
                        <p className="is-size-4">Je m'appelle <input type="text" name="firstname" placeholder="prénom" value={this.state.firstname} onChange={this.handleChange}/> <input type="text" name="lastname" placeholder="nom de famille" value={this.state.lastname} onChange={this.handleChange}/></p>
                        <p className="is-size-4">Je suis né le <input type="date" name="dateofbirth" value={this.state.dateofbirth} onChange={this.handleChange}></input> et mon adresse est <input type="text" name="address" placeholder="adresse" value={this.state.address} onChange={this.handleChange}/></p>
                        <p className="is-size-4">Mon adresse email est le <input type="email" name="email" placeholder="adresse email" value={this.state.email} onChange={this.handleChange} /></p>
                    </form>
                    </div>
                    <h2 className="register-title subtitle is-size-3">Mes centres d'intérêts</h2>
                    <p>Sélectionne tous tes intérêts en cliquant desuss.</p>
                    <div className="columns interest-columns is-multiline column is-offset-1 is-10 is-mobile">
                        <InterestBox icon="fa-futbol" />
                    </div>
                </section>
            </div>
        )
    }
}

export default RegisterVolunteer
