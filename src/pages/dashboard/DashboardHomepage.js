import React, { Component } from 'react'
import Dashboard from '../Dashboard';
import FeatureInformation from '../../components/dashboard/FeatureInformation';
import FeatureIcon from '../../components/dashboard/FeatureIcon';
import StatisticsBox from '../../components/dashboard/StatisticsBox'
import BadgeBox from '../../components/dashboard/BadgeBox'
import {Link} from 'react-router-dom'

export class DashboardHomepage extends Component {
    render() {
        return (
            <Dashboard>
                <div className="columns is-multiline">
                    <div className="columns no-padding-bottom column is-6 is-offset-1 is-multiline">
                        <div className="column is-half is-half-mobile">
                            <FeatureIcon title="Recherche intelligente" icon={require('../../img/interests/gears.svg')} destination="/recherche"/>
                        </div>
                        <div className="column is-half is-half-mobile">
                            <FeatureIcon title="Recherche classique" icon={require('../../img/interests/search.svg')} destination="/recherche/classique"/>
                        </div>
                        <div className="column is-12 no-padding-bottom">
                            <FeatureInformation title="Groupes">
                                <p>Créez un groupe et faites du bénévolat avec vos amis !</p>
                                <p>Invitez-les à rejoindre votre groupe et vous pourrez facilement vous inscrire ensemble à l'offre que vous voulez.</p> 
                                <br />
                                <Link to="/groupes">Voir les groupes</Link>
                            </FeatureInformation>
                        </div>
                    </div>
                    <div className="column is-4">
                        <StatisticsBox />
                    </div>
                </div>
                <div className="columns">
                        <div className="column no-padding-bottom columns is-6 is-offset-1">
                            <div className="column is-12 no-padding-bottom">
                                <FeatureInformation title="Badges">
                                    <p>En complétant certaines actions, vous pourriez gagner des badges qui s'afficheront sur votre profil.</p>
                                </FeatureInformation>
                            </div>
                        </div>
                        <div className="column is-4">
                            <BadgeBox />
                        </div>
                    </div>
            </Dashboard>
        )
    }
}

export default DashboardHomepage
