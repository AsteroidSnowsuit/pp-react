import React, { Component } from 'react'
import Dashboard from '../Dashboard';
import FeatureInformation from '../../components/dashboard/FeatureInformation';
import FeatureIcon from '../../components/dashboard/FeatureIcon';
import StatisticsBox from '../../components/dashboard/StatisticsBox'
import BadgeBox from '../../components/dashboard/BadgeBox'
import {Link} from 'react-router-dom'
import * as Cookies from 'js-cookie'
import LinkButton from '../../components/LinkButton';
import {withRouter} from 'react-router-dom';

export class AlternativeDashboardHomepage extends Component {
    render() {
        if(Cookies.get('organism') == 0) {
            return (
                <Dashboard>
                    <div className="columns is-multiline">
                        <div className="column is-third">
                            <div className="dashboard-box">
                                <h2 className="subtitle">Recherche</h2>
                                <LinkButton destination="/recherche-intelligente" shape="rounded" type="primary">Recherche intelligente</LinkButton>
                                <p>La recherche intelligente trouve les offres les plus susceptibles de vous intéresser en se basant sur votre âge et les intérêts renseignés sur votre <Link to="/profil">profil</Link>.</p>
                                <LinkButton destination="/recherche" shape="rounded" type="secondary">Recherche classique</LinkButton>
                                <p>La recherche classique vous permet de filtrer et trier les offres de la manière que vous voulez.</p>
                            </div>
                        </div>
                        <div className="column is-third">
                            <div className="dashboard-box">
                                <h2 className="subtitle">Statistiques</h2>
                                <p>Cette section n'est pas encore disponible.</p>
                            </div>
                        </div>
                        <div className="column is-third">
                            <div className="dashboard-box">
                                <h2 className="subtitle">Informations</h2>
                                <p>Le site étant encore en ses débuts, il y a encore certaines fonctionnalités qui ne sont pas disponibles.</p>
                                <p>Dans le futur, il y aura la possiblité de s'incrire aux offres en groupe, d'obtenir des badges en faisant certaines actions et bien plus.</p>
                            </div>
                        </div>
                    </div>
                </Dashboard>
            )
        }
        if(Cookies.get('validation-pending') == "true") {
            this.props.history.push('/verification-en-cours');
        } 
        return (
            <Dashboard>
                <div className="columns is-multiline">
                    <div className="column is-half">
                        <div className="dashboard-box">
                            <h2 className="subtitle">Mon organisme</h2>
                            {Cookies.get('organismCreated') == "true" ? (
                                <LinkButton type="primary" destination="/organisme/parametres">Gérer mon organisme</LinkButton>
                            ) : (
                                <LinkButton type="primary" destination="/organisme/creation">Créer mon organisme</LinkButton>
                             )}
                        </div>
                    </div>
                    <div className="column is-half">
                        <div className="dashboard-box">
                            <h2 className="subtitle">Mes offres</h2>
                            <LinkButton type="primary" destination="/organisme/offres/nouvelle">Ajouter une offre</LinkButton>
                            <LinkButton type="primary" destination="/organisme/offres">Voir mes offres</LinkButton>
                        </div>
                    </div>
                </div>
            </Dashboard>
        )
    }
}

export default withRouter(AlternativeDashboardHomepage)
