import React from 'react'
import { connect } from 'react-redux'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './chatMessageList.css'

const ChatMessageList = props => {
    const {chatHistory} = props
    
    return (
        <ReactCSSTransitionGroup 
        className="chat-messages"
        transitionName="chatIn"
        transitionEnterTimeout={400}
        transitionLeaveTimeout={400}
        component="div">

            {chatHistory.map((chat, i) => {                
                return(
                    <div className={`message message-${chat.messageType}`} key={i}>
                        <div className="message-text">{chat.message}</div>
                        <div className="message-timestamp">{chat.sendIn.replace(/((\d{1,2})\/(\d{1,2})\/(\d{4}), |(:\d{2} ))/g, ' ')}</div>
                    </div>
                )
            })}

        </ReactCSSTransitionGroup>
    )
}

const mapStateToProps = state => {
    return {
        chatHistory: [...state.chatHistory]
    }
}

export default connect(mapStateToProps)(ChatMessageList)
// DONE