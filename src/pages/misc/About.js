import React, { Component } from 'react'
import Homepage from '../Homepage'

export class About extends Component {
    render() {
        return (
            <Homepage>
                <div id="about">
                    <h1 className="title">À propos</h1>
                    <p>Cette page regroupe quelques informations sur le but de Volontarius et le contexte de sa création.</p>
                    <h2 className="subtitle">Qu'est-ce que Volontarius ?</h2>
                    <p>Volontarius est une plateforme en ligne permettant à tous de trouver du bénévolat adapté à leur âge et leurs intérêts. En s’inscrivant, vous pouvez renseigner sur votre profil plusieurs renseignements qui permettront ensuite à la recherche intelligente de trouver les offres de bénévolat qui vous correspondent le plus.</p>
                    <p>Pour les organismes, Volontarius est un moyen d’atteindre des bénévoles qui sont intéressés et adaptés à leurs activités. Ça permet d’avoir des bénévoles motivés et impliqués facilement.</p>
                    <h2 className="subtitle">Dans quel but ce site a-t-il été créé ?</h2>
                    <p>Dans le cadre du projet personnel de secondaire 5 du programme PEI, j’ai décidé de créer une plateforme interactive en ligne facilitant le bénévolat. Tout au long de mon secondaire, trouver du bénévolat était plutôt difficile et je finissais souvent par m’inscrire à des offres qui ne m’intéressaient pas vraiment. J’ai donc pensé que créer ce site pourrait permettre à davantage de bénévoles de trouver du bénévolat qui leur correspond et donner à d’autres le goût de faire du bénévolat.</p>
                    <h2 className="subtitle">Pourquoi est-ce qu'il n'y a pas de version anglaise ?</h2>
                    <p>Étant donné que mon temps pour construire le site était limité, je n’ai pas eu l’occasion d’implémenter le module de langue sur le site, ni de créer les traductions adéquates.</p>
                    <p>Cependant, il est possible, dans le futur, que d’autres langues soient ajoutées sur Volontarius.</p>
                    <h2 className="subtitle">Combien de temps est-ce que le site restera en ligne ?</h2>
                    <p>Même si le site a été créé dans le cadre scolaire, je souhaite qu’il reste en ligne le plus longtemps possible. Il sera bientôt possible de faire des dons afin d’aider le financement du site pour qu’il puisse être améliorer et rester en ligne.</p>
                </div>
            </Homepage>
        )
    }
}

export default About
