import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from 'axios'
import {store} from 'react-notifications-component'

axios.interceptors.response.use(function (success) {
    if(success.data.success != "") {
        store.addNotification({
            title: 'Succès !',
            message: success.data.success,
            type: 'success',
            container: 'top-right'
        })
    }
    return success;
  }, function (error) {
    store.addNotification({
        title: 'Erreur !',
        message: error.response.data.error,
        type: 'danger',
        container: 'top-right'
    })
    return Promise.reject(error);
  });

ReactDOM.render(<App />, document.getElementById("root"));
