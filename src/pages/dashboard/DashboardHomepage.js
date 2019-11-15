import React, { Component } from 'react'
import Dashboard from '../Dashboard';
import FeatureRow from '../../components/dashboard/FeatureRow';

export class DashboardHomepage extends Component {
    render() {
        return (
            <Dashboard>
                <FeatureRow title="Recherche intelligente" subtitle="Recherche intelligente (recommandé)" iconSide="left">
                    Permet de trouver du bénévolat correspondant à vos intérêts, proche de chez vous et correspondant à votre groupe d'âge.
                    Compléter votre profil vous permettra d'obtenir des résultats plus précis.
                </FeatureRow>
                <FeatureRow title="Recherche classique" iconSide="right"></FeatureRow>
            </Dashboard>
        )
    }
}

export default DashboardHomepage
