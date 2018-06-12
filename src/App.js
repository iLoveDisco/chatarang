import React, { Component } from 'react'

import './App.css'
import Main from './Main'

class App extends Component {
  state = {
    user: {
      uid: '1',
      userName: 'Eric',
    }
  }

  render() {
    return (
      <div className="App">
        <Main user={this.state.user // passes the User into Main as a Prop
        } />
      </div>
    )
  }
}

export default App