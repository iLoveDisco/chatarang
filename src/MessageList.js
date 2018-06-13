import React from 'react'

import Message from './Message.js'

const MessageList = (props) => {
  return (
    <div className="MessageList" style = {styles.messageList}>
      {
        props.messages.map(msg => <Message key={msg.id} message={msg} />)
      }
    </div>
  )
}

const styles = {
  messageList: {
    backgroundColor: 'white',
    flex: 1,
    paddingBottom: '1rem',
    overflowY: 'scroll',
  }
}

export default MessageList