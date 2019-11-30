import React, { Component } from 'react'
import InformationRow from '../../components/homepage/InformationRow';
import LinkButton from '../../components/LinkButton';
import Homepage from '../Homepage'

export class HomepageHomepage extends Component {
    render() {
        return (
            <Homepage>
                <section className="section">
                        <InformationRow 
                            imageSide="right" 
                            title="La nouvelle ère du bénévolat"
                            subtitle="Volontarius révolutionne l'offre et la demande de bénévolat."
                            button="Commencer"
                            destination="/inscription"
                            image={require('../../img/new_era.svg')} /> 
                        <InformationRow 
                            imageSide="left" 
                            title="Recherche intelligente"
                            subtitle="Trouvez du bénévolat qui vous correspond."
                            image={require('../../img/smart_search.svg')} /> 
                        <InformationRow 
                            imageSide="right" 
                            title="Eco-friendly"
                            subtitle="Volontarius mets en place des mesures favorisant la protection de l'environnement."
                            image={require('../../img/eco_friendly.svg')} /> 
                        <InformationRow 
                            imageSide="left" 
                            title="Recherche intelligente"
                            subtitle="Volontarius peut rester en ligne à l'aide des généreux dons. Vous pouvez vous aussi soutenir le site en faisant un don."
                            image={require('../../img/donations.svg')} /> 
                    </section>
                    <section className="section has-text-centered is-size-4">
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                                <p>Le meilleur moyen de nous soutenir est de faire un don.</p>
                                <p>Volontarius s'engage à publier le montant d'argent reçu à chaque mois et la façon dont il est utilisé pour soutenir le site.</p>
                                <div className="buttons is-centered donation-buttons">
                                    <LinkButton size="medium" shape="rounded" type="primary" destination="/dons">Faire un don</LinkButton>
                                    <LinkButton size="medium" shape="rounded" type="secondary" destination="/dons">Informations sur les dons</LinkButton>
                                </div>
                            </div>
                        </div>
                    </section>
            </Homepage>
        )
    }
}

export default HomepageHomepage
