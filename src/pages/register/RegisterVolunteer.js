import React, { Component } from 'react'
import HomepageNavigation from '../../components/navigation/HomepageNavigation';
import InterestBox from '../../components/register/InterestBox';

export class RegisterVolunteer extends Component {

    constructor(props) {
        super(props)
        this.state = {interests: {}}
        this.handleChange = this.handleChange.bind(this);
        this.addInterest = this.addInterest.bind(this);
    }

    addInterest(id, name) {
        this.setState({interest:  })
    }

    checkInfoFilled() {
        if(this.state.firstname != undefined && this.state.lastname != undefined & this.state.dateofbirth != undefined && this.state.email != undefined && this.state.address != undefined) {
            return true;
        }
        else {
            return false;
        }
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
                    <form className="register-form">
                        <h1 className="title is-size-1 register-title">Je suis un bénévole</h1>
                        <section className="section register-section">
                            <p>Clique sur les lignes pour y ajouter tes informations.</p>
                            <div className="has-text-left">
                            <p className="is-size-4">Je m'appelle <input type="text" name="firstname" placeholder="prénom" value={this.state.firstname} onChange={this.handleChange}/> <input type="text" name="lastname" placeholder="nom de famille" value={this.state.lastname} onChange={this.handleChange}/></p>
                            <p className="is-size-4">Je suis né le <input type="date" name="dateofbirth" value={this.state.dateofbirth} onChange={this.handleChange}></input> et mon adresse est <input type="text" name="address" placeholder="adresse" value={this.state.address} onChange={this.handleChange}/></p>
                            <p className="is-size-4">Mon adresse email est le <input type="email" name="email" placeholder="adresse email" value={this.state.email} onChange={this.handleChange} /></p>
                            </div>
                        </section>
                        <section className="section register-section">
                            <h2 className="register-title subtitle is-size-3">Mes centres d'intérêts</h2>
                            <p>Sélectionne tous tes intérêts en cliquant desuss.</p>
                            <div className="columns interest-columns is-multiline column  is-mobile">
                                <InterestBox id="1" handleClick={this.addInterest} icon={require('../../img/interests/futbol.svg')} title="Sports" />
                                <InterestBox id="2" handleClick={this.addInterest} icon={require('../../img/interests/paw.svg')} title="Animaux" />
                                <InterestBox id="3" handleClick={this.addInterest} icon={require('../../img/interests/briefcase.svg')} title="Bureau" />
                                <InterestBox id="4" handleClick={this.addInterest} icon={require('../../img/interests/child.svg')} title="Enfants" />
                                <InterestBox id="5" handleClick={this.addInterest} icon={require('../../img/interests/carry.svg')} title="Manuel" />
                                <InterestBox id="6" handleClick={this.addInterest} icon={require('../../img/interests/leaf.svg')} title="Écolo" />
                                <InterestBox id="7" handleClick={this.addInterest} icon={require('../../img/interests/microchip.svg')} title="Techno" />
                                <InterestBox id="8" handleClick={this.addInterest} icon={require('../../img/interests/seniors.svg')} title="Aînés" />
                                <InterestBox id="9" handleClick={this.addInterest} icon={require('../../img/interests/theater.svg')} title="Culture" />
                            </div>
                        </section>
                        <section className="section register-section">
                            {(1==1) ? 
                            <div><h2 className="register-title subtitle is-size-3 has-text-centered">Vérifions vos informations</h2>
                            <p className="has-text-centered">Si une information n'est pas correcte, remonte et rectifie-la.</p>
                            <div className="has-text-left">
                            <p className="is-size-4">Votre nom est <span className="underlined">{this.state.firstname}</span> <span className="underlined">{this.state.lastname}</span>, vous êtes né le <span className="underlined">{this.state.dateofbirth}</span>.</p>
                            <p className="is-size-4">Votre adresse email est le <span className="underlined">{this.state.email}</span>.</p>
                            <p className="is-size-4">Vous êtes interessé par les animaux, le sport et le travail de bureau.</p>
                            <p className="is-size-4">Veuillez entrer votre mot de passe pour confirmer votre inscription.</p>
                            <input type="password" name="password" placeholder="Mot de passe"></input><br />
                            <input type="password" name="c_password" placeholder="Confirmation de mot de passe"></input><br />
                            <button className="button is-primary has-text-left">Confirmer</button>
                            </div></div> : '' }      
                        </section>      
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}

export default RegisterVolunteer
