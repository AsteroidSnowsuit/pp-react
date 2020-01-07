import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class Footer extends Component {
    render() {
        return (
            <div className="level level-footer">
                <div className="level-left">Copyright 2020 - Volontarius</div>
                <div className="level-right"><Link to="/me-contacter">Contacter</Link></div>
            </div>
        )
    }
}

export default Footer
