import React, { Component } from 'react'

import ChatHeader from './ChatHeader.js'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends Component {
  constructor() {
    super()

    this.state = {
      messages: [] // initially empty
    }
  }

  addMessage = (body) => {
    // NOTE: Make sure you pass in this function to lower tags as a Prop
    const messages = [...this.state.messages] // copies the current array of messages
    messages.push({
      id: Date.now(),
      userName: this.props.user.userName,
      body,// body: body
    })

    this.setState({ messages })
  }

  render() {
    return (
      <div className="Chat" style = {styles.chat}>
        <ChatHeader />
        <MessageList messages={this.state.messages} />
        <MessageForm addMessage={this.addMessage} />
      </div>
    )
  }
}

const styles = {
  chat: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
}

export default Chat