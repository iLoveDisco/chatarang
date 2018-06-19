import React, { Component } from 'react'

import Chat from './Chat'
import RoomList from './RoomList'
import UserInfo from './UserInfo'

class Main extends Component {
  constructor() {
    super()

    this.state = {
      room: {}
    }
  }

  componentDidMount() {
    this.loadRoom({
      name: this.props.match.params.roomName,
    })
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

  render() {
    return (
      <div className="Main" style={styles}>
        <aside className="Sidebar" style={styles.sidebar}>
          <UserInfo user={this.props.user} signOut={this.props.signOut}/>
            <h1 style={styles.h1}>XTBC 18</h1>
          <RoomList />
        </aside>
        
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

  sidebar: {
    backgroundColor: '#333344',
    color: 'rgba(255, 255, 255, 0.8)',
    width: '12rem',
    padding: '1rem 0',
    display: 'flex',
    flexDirection: 'column',
  },

  h1: {
    color: 'white',
    fontSize: '1.2rem',
    marginTop: 0,
    padding: '0 1rem',
  },
}

export default Main
