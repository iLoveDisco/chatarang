import React, {Component} from 'react'

import Avatar from './Avatar'
import Metadata from './Metadata'

class Message extends Component {
  constructor () {
    super()

    this.state = {
      likeCount: 0,
      didLike: false
    }
  }

  updateLikeCount = () => {
    if(!this.state.didLike) {
      let likeCount = this.state.likeCount;
      likeCount++;
      this.setState({likeCount});
      this.setState({didLike: true})
    }
  }

  render() {
    return (
      <div className="Message" style={styles.message}>
        <div className="count" style={styles.count}>
          {this.state.likeCount}
        </div>
        
        <div className="favorite" style={styles.favorite} onClick={this.updateLikeCount}>
          <i className="far fa-heart" style={styles.favorite}></i>
        </div>
        
        <Avatar user={this.props.message.user} />
        <div className="details" style={styles.details}>
          <Metadata message={this.props.message}/>
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
    paddingRight: '.25rem',
    paddingTop: '.25rem',
    color: 'black'
  },

  count: {
    paddingRight: '.40rem',
    paddingTop: '.25rem',
    
  }
}

export default Message