import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ChatActionCreators from '../../../actions/chatActions'
import PropTypes from 'prop-types'

import { handleSubmit, socketListener } from '../../../methods/messagesControl'

const InputControl = props => {
    const { textMessage, dispatch } = props
    const updateMessage = bindActionCreators(ChatActionCreators.writeMessage, dispatch)
    
    // passed all socket logic to this module
    socketListener(dispatch)

    return (
        <form className="chat-message-features" onSubmit={e => handleSubmit(e, props.hideEmojiList, textMessage, dispatch)}>
            <div className="chat-btn-icon chat-emojis-icon" onClick={() => props.toggleEmojiList()}><i className="fas fa-smile"></i></div>
            <input className="chat-input-text" type="text" placeholder="Type a message..." value={textMessage} onChange={e => updateMessage(e.target.value)}/>
            <button className="chat-btn-icon chat-send-message" type="submit" disabled={textMessage.length > 0 ? false : true}><i className="fas fa-paper-plane "></i></button>
        </form>
    )
}

InputControl.propTypes = {
    textMessage: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        textMessage: state.textMessage
    }
}

export default connect(mapStateToProps)(InputControl)