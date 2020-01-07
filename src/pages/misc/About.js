import React, { Component } from 'react'
import Homepage from '../Homepage'

export class About extends Component {
    render() {
        return (
            <Homepage>
                <h1 className="title">À propos</h1>
                <p>Cette page regroupe quelques informations sur le but de Volontarius et le contexte de sa création.</p>
                <h2 className="subtitle">Qu'est-ce que Volontarius ?</h2>
                <h2 className="subtitle">Dans quel but ce site a-t-il été créé ?</h2>
                <h2 className="subtitle">Pourquoi est-ce qu'il n'y a pas de version anglaise ?</h2>
                <h2 className="subtitle">Combien de temps est-ce que le site restera en ligne ?</h2>
            </Homepage>
        )
    }
}

export default About
