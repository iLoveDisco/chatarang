import React, { Component } from 'react'

class MessageForm extends Component {
  state = {
    body: '',
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.addMessage(this.state.body)
  }

  handleChange = (ev) => {
    this.setState({ body: ev.target.value })
  }

  render() {
    return (
      <form
        className="MessageForm" onSubmit={this.handleSubmit} style = {styles.messageForm}>
        <input
          type="text"
          name="body"
          placeholder="Type a message..."
          value={this.state.body}
          onChange={this.handleChange}
        />
        <button type="submit">Send</button>
      </form>
    )
  }
}

const styles = {
  messageForm: {
    backgroundColor: 'white',
    height: '3rem',
    display: 'flex',
    alignItems: 'stretch',
    border: '2px solid #999',
    borderRadius: '0.5rem',
    margin: '0.25rem',
    padding: 0
  }
  
  .MessageForm .chatIcon {
    display: flex;
    border-radius: 0.5rem;
    align-items: center;
    background-color: white;
    color: #ccc;
    padding: 0 0.5rem;
    font-size: 1.2rem;
  }
  
  .MessageForm input {
    flex: 1;
    font-size: 1.2rem;
    border: 0;
  }
  
  .MessageForm button {
    font-size: 1.5rem;
    background-color: #1A8FE3;
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    border: 1px solid white;
  }
}

export default MessageForm