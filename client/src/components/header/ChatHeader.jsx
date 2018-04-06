import React from 'react'
import PropTypes from 'prop-types'
import './chatHeader.css'

const ChatHeader = props => {
    return (
          <div className="chat-header">
            <div className="fakeImage">
              <img src={require('../../assets/robot.svg')} alt="an robot profile"/>
            </div>
            {props.children}
          </div>
    )
}

ChatHeader.propTypes = {
  children: PropTypes.object
}

export default ChatHeader
// DONE