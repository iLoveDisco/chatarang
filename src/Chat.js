import React, { Component } from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

import base from './base'

class Chat extends Component {
  constructor() {
    super()

    this.state = {
      general: [],
      random: []
    }
  }

  componentWillMount() {
    base.syncState(`general/messages`, {
        context: this,
        state: 'general',
        asArray: true,
      })
    base.syncState(`random/messages`, {
        context: this,
        state: 'random',
        asArray: true,
      })
    
  }

  addMessage = (body) => {
    let messages = this.state[this.props.roomName.substring(1)];
    messages.push({
      id: Date.now(),
      user: this.props.user,
      body,
    })

    switch(this.props.roomName){
      case "#general":
        this.setState({general: messages}); break;
      case "#random":
        this.setState({random: messages}); break;
    }
  }

  render() {
    return (
      <div className="Chat" style={styles}>
        <ChatHeader roomName = {this.props.roomName}/>
        <MessageList messages={this.state[this.props.roomName.substring(1)]} roomName = {this.props.roomName} />
        <MessageForm addMessage={this.addMessage} />
      </div>
    )
  }
}

const styles = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
}

export default Chat
