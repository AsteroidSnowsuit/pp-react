import React, { Component } from 'react'
import Button from '../Button'
import Popup from 'reactjs-popup'
import Axios from 'axios';
import * as Cookies from 'js-cookie';
import AWN from "awesome-notifications"
import {store} from "react-notifications-component"

export class PopupArchive extends Component {
    constructor() {
        super();
        this.state = {
          isOpen: false
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.offerDelete = this.offerDelete.bind(this);
        this.notifier = new AWN();
      }
    
      handleOpen() {
        this.setState({ isOpen: true });
      }
    
      handleClose() {
        this.setState({ isOpen: false });
      }

      offerDelete() {
          Axios.get('https://api.volontarius.com/api/organism/offer/' + this.props.id + '/archive', {headers: {Accept: 'application/json', Authorization: 'Bearer ' + Cookies.get('token')}})
          .then((success) => {
            this.props.history.push('/organisme/offres')
          }, (error) => {
            store.addNotification({
                title: 'Erreur !',
                message: error.response.data.error,
                type: 'danger',
                container: 'top-right'
            })
        })
      }
    render() {
        return (
            <Popup trigger={<Button noSubmit={true} type="warning">Archiver l'offre</Button>} open={this.state.isOpen} onOpen={this.handleOpen} onClose={this.handleClose} modal>
                <div className="has-text-centered">
                    <h1 className="title">Êtes-vous sûr ?</h1>
                    <p>Vous allez archiver l'offre. Vous ne pourrez plus modifier ou supprimer l'offre. Les utilisateurs ne pourront plus s'inscrire. Cette action est irréversible.</p>
                    <Button type="warning" onClick={this.handleClose} noSubmit={true}>Annuler</Button>
                    <Button type="danger"  onClick={this.offerDelete} noSubmit={true}>Archiver</Button>
                </div>
            </Popup>
        )
    }
}

export default PopupArchive
