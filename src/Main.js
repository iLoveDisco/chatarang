import React, { Component } from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'

import base from './base'

class Main extends Component {
  constructor() {
    super()

    this.state = {
      room: {},
      rooms: []
    }
  }

  componentDidMount() {
    this.loadRoom({
      name: this.props.match.params.roomName,
    })

    base.syncState(
      'rooms',
      {
        context: this,
        state: 'rooms',
      }
    )
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.roomName !== this.props.match.params.roomName) {
      this.loadRoom({
        name: this.props.match.params.roomName,
      })
    }
  }

  loadRoom = (room) => {
    this.setState({ room })
  }

  addRoom = (room) => {
    const rooms = {...this.state.rooms}
    rooms[room.name] = room
    this.setState({ rooms })
  }

  render() {
    return (
      <div className="Main" style={styles}>
        <Sidebar
          user={this.props.user}
          signOut={this.props.signOut}
          addRoom={this.addRoom}
          rooms= {this.state.rooms}
        />
        <Chat
          user={this.props.user}
          room={this.state.room}
        />
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
