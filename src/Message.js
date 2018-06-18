import React, {Component} from 'react'

import Avatar from './Avatar'
import Metadata from './Metadata'

class Message extends Component {
  constructor () {
    super()
  }
  render() {
    return (
      <div className="Message" style={styles.message}>
        
        <i className="far fa-heart" style={styles.favorite}></i>
        <Avatar user={this.props.message.user} />
        <div className="details" style={styles.details}>
          <Metadata message={this.props.message} />
          <div className="body">
            {this.props.message.body}
          </div>
          
        </div>
      </div>
    )
  }
}

const styles = {
  message: {
    display: 'flex',
    marginTop: '1rem',
    padding: '0 1rem',
  },

  details: {
    flex: 1,
    paddingLeft: '0.5rem',
  },

  favorite: {
    paddingRight: '.75rem',
  }
}

export default Message
