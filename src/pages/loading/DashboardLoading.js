import React, { Component } from 'react'
import LoadingScreen from 'react-loading-screen';


export class DashboardLoading extends Component {
    render() {
        var loading = (this.props.loading != undefined ? this.props.loading : false) 
        return (
            <LoadingScreen loading={loading} bgColor="#e8e8e8" textColor="black" spinnerColor="#0375B4" text="Chargement de la page...">
                {this.props.children}
            </LoadingScreen>
        )
    }
}

export default DashboardLoading
