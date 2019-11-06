import React, { Component } from 'react'
import HomepageNavigation from '../../components/navigation/HomepageNavigation';
import InterestBox from '../../components/register/InterestBox';

export class RegisterOrganism extends Component {

    constructor(props) {
        super(props)
        this.state = {interests: {}}
        this.handleChange = this.handleChange.bind(this);
        this.addInterest = this.addInterest.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    addInterest(id, name) {
        var mid = 'm' + id;
        console.log(this.state.interests[mid] == undefined)
        if(this.state.interests[mid] == undefined) {
            this.setState((state) => {
                state.interests[mid] = name;
                return {interests: state.interests}
            })
        } else {
            var newInterest = this.state.interests;
            delete newInterest[mid]
            this.setState(newInterest)
        }
        console.log(this.state.interests)
    }

    getInterests() {
        var interests = (Object.keys(this.state.interests).map((key) => {
            return (<span className="interest-names" key={key}>{this.state.interests[key]}</span>)
        }))
        interests = interests.length > 0
        ? interests.reduce((prev, curr) => <>{prev}{', '}{curr}</>)
        : null;
        return interests
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

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push('/inscription/verifier-email')
    }
    render() {
        return (
            <div className="container">
                <HomepageNavigation />
                <section className="section has-text-centered">
                    <div className="column is-offset-1 is-10">
                    <h1 className="title is-size-1 register-title">Inscription des organismes</h1>
                        <section className="section organism-register">
                    <form className="register-form organism-form" method="POST" onSubmit={this.handleSubmit}>
                            <div className="has-text-left">
                            <label className="is-size-4">Prénom : </label><input type="text" name="firstname" placeholder="Prénom" value={this.state.firstname} onChange={this.handleChange}/>
                            <label className="is-size-4">Nom de famille : </label><input type="text" name="lastname" placeholder="Nom de famille" value={this.state.lastname} onChange={this.handleChange}/>
                            <label className="is-size-4">Date de naissance : </label><input type="date" name="dateofbirth" value={this.state.dateofbirth} onChange={this.handleChange}></input>
                            <label className="is-size-4">Adresse de travail : </label><input type="text" name="address" placeholder="Adresse" value={this.state.address} onChange={this.handleChange}/>
                            <label className="is-size-4">Adresse email : </label><input type="email" name="email" placeholder="Adresse email" value={this.state.email} onChange={this.handleChange} />
                            <label className="is-size-4">Mot de passe : </label><input type="password" name="password" placeholder="Mot de passe"></input>
                            <label className="is-size-4">Confirmation de mot de passe : </label><input type="password" name="c_password" placeholder="Confirmation de mot de passe"></input>                     
                            </div>
                            <button className="button is-primary has-text-left">Soumettre le formulaire</button>
                        </form>
                        </section>
                    </div>
                </section>
            </div>
        )
    }
}

export default RegisterOrganism
