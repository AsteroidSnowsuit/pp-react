export function addInterest(id, name) {
    var mid = 'm' + id;
    console.log(this.state.interests[mid] == undefined)
    if(this.state.interests[mid] == undefined) {
        this.setState((state) => {
            state.interests[mid] = name;
            return {interests: state.interests}
        })
    } else {
        var newInterest = this.state.interests;
        delete newInterest[mid]
        this.setState(newInterest)
    }
    console.log(this.state.interests)
}

export function handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

export function addAlgolia() {
    var places = require('places.js');
    var placesAutocomplete = places({
    appId: "plZJLSHIW8M5",
    apiKey: "dca5bc08b6d6290701c6dfa897fd1fab",
    container: document.querySelector('#address-input')
    });
}
