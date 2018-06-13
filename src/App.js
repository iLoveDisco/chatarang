import React, { Component } from 'react'

import './App.css'
import Main from './Main'
import SignIn from './SignIn'

class App extends Component {
  state = {
    user: {
      uid: null,
      userName: null,
    }
  }

  updateUser = (name) => {
    this.setState({user: {uid: Date.now(), userName: name}})
  }

  render() {
    if(this.state.user.uid == null) {
      return (<SignIn user={this.state.user} updateUser = {this.updateUser} />)
    }
    return (
      <div className="App">
        <Main user={this.state.user} />
      </div>
    )
  }
}

export default App