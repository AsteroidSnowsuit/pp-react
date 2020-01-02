import React, { Component } from 'react'
import LoadingScreen from 'react-loading-screen';


export class HomepageLoading extends Component {
    render() {
        var loading = (this.props.loading != undefined ? this.props.loading : false) 
        return (
            <LoadingScreen loading={loading} bgColor="#0375B4" textColor="white" spinnerColor="#FFBA00" text="Chargement de la page...">
                {this.props.children}
            </LoadingScreen>
        )
    }
}

export default HomepageLoading
