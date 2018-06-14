import React, { Component } from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'

class Main extends Component {
  constructor() {
    super()

    this.state = {
      currentRoom: '#general'
    }
  }

  updateRoom = (room) => {
    this.setState({currentRoom: room});
  }

  handleUpdate = (roomName) => {
    return <Chat user={this.props.user} roomName = {roomName} />;
  }

  render() {
    return (
      <div className="Main" style={styles}>
        <Sidebar user={this.props.user} signOut={this.props.signOut} updateRoom = {this.updateRoom}/>
        {this.handleUpdate(this.state.currentRoom)}
      </div>
    )
  }
}

const styles = {
  display: 'flex',
  alignItems: 'stretch',
  height: '100vh',
}

export default Main
