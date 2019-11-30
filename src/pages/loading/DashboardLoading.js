import React, { Component } from 'react'
import LoadingScreen from 'react-loading-screen';


export class DashboardLoading extends Component {
    render() {
        return (
            <LoadingScreen loading={this.props.loading} bgColor="#e8e8e8" textColor="black" spinnerColor="#0375B4" text="Chargement de la page...">
                {this.props.children}
            </LoadingScreen>
        )
    }
}

export default DashboardLoading
