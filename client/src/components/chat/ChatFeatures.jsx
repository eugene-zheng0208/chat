import React from 'react'

import './chatFeatures.css'
import EmojiList from '../emoji/EmojiList'
import InputControl from './inputControl/InputControl'

const ChatFeatures = props => {
    // control emoji list visibility
    const toggleEmojiList = () => document.getElementsByClassName('chat-emojis')[0].classList.toggle('activated')
    const hideEmojiList = () => document.getElementsByClassName('chat-emojis')[0].classList.remove('activated')
    
    return (
        <div className="chat-footer">
            <EmojiList/>
            <InputControl hideEmojiList={hideEmojiList} toggleEmojiList={toggleEmojiList}/>
        </div>
    )
}

export default ChatFeatures