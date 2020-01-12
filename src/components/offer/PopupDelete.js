import React, { Component } from 'react'
import Button from '../Button'
import Popup from 'reactjs-popup'
import Axios from 'axios';
import * as Cookies from 'js-cookie';
import {store} from "react-notifications-component"

export class PopupDelete extends Component {
    constructor() {
        super();
        this.state = {
          isOpen: false
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.offerDelete = this.offerDelete.bind(this);
      }
    
      handleOpen() {
        this.setState({ isOpen: true });
      }
    
      handleClose() {
        this.setState({ isOpen: false });
      }

      offerDelete() {
          Axios.delete('https://api.volontarius.com/api/organism/offer/' + this.props.id, {headers: {Accept: 'application/json', Authorization: 'Bearer ' + Cookies.get('token')}})
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
            <Popup trigger={<Button noSubmit={true} type="danger">Supprimer l'offre</Button>} open={this.state.isOpen} onOpen={this.handleOpen} onClose={this.handleClose} modal>
                <div className="has-text-centered">
                    <h1 className="title">Êtes-vous sûr ?</h1>
                    <p>Vous allez supprimer l'offre. Tous les participants seront désinscrits et l'offre sera irrécupérable.</p>
                    <Button type="warning" onClick={this.handleClose} noSubmit={true}>Annuler</Button>
                    <Button type="danger"  onClick={this.offerDelete} noSubmit={true}>Supprimer</Button>
                </div>
            </Popup>
        )
    }
}

export default PopupDelete
