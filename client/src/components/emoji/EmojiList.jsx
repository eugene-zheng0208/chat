import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ChatActionCreators from '../../actions/chatActions'
import PropTypes from 'prop-types'

import './emojiList.css'
import emojiList from '../../methods/emojiList'

const EmojiList = props => {  
    const { dispatch } = props;  
    const insertEmoji = bindActionCreators(ChatActionCreators.insertEmoji, dispatch)

    return (
        <div className="chat-emojis">
          <h2>Select emojis:</h2>
          <div className="chat-emojis-list">
            {emojiList.map((emoji, i) => {
                return(
                    <span key={`emoji ${i}`} onClick={() => insertEmoji(emoji)} className="emoji" role="img" aria-label="emojis">{emoji}</span>
                )
            })}
          </div>
        </div>
    )
}

EmojiList.propTypes = {
    dispatch: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        ...state.dispatch
    }
}

export default connect(mapStateToProps)(EmojiList)