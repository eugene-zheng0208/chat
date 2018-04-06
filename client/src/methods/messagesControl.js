import { bindActionCreators } from 'redux'
import * as ChatActionCreators from '../actions/chatActions'

import socket from './socket'

export const handleSubmit = (event, hideEmojiList, textMessage, dispatch) => {
    const updateMessage = bindActionCreators(ChatActionCreators.writeMessage, dispatch)

    event.preventDefault()

    // hide Emoji list if opened
    hideEmojiList()

    // socket send message
    new Promise((resolve, reject) => resolve(socket.send(textMessage)))
        // clean text input        
        .then(() => updateMessage(''))
        .catch(err => console.log(err))
}

const updateChatHistory = (history, dispatch) => {
    const sendMessage = bindActionCreators(ChatActionCreators.sendMessage, dispatch)
  
    // dispatch message to store redux
    sendMessage(history)
    
    // keep always scroll on bottom of chat
    document.querySelector(".chat-messages").scrollTop = document.querySelector(".chat-messages").scrollHeight
}

const clearHistory = dispatch => {
    const clearHistoryAction = bindActionCreators(ChatActionCreators.clearHistory, dispatch)    
    
    // clear the history conversation in store
    return clearHistoryAction()
}

// socket subscriber
export const socketListener = dispatch => socket.onmessage = (event) => {
    const data = event.data
    const chatHistory = Object.keys(JSON.parse(data)).filter(key => key === 'chatHistory')

    // clearHistory
    if(JSON.parse(data)['clear'] === 'clearHistory') return clearHistory(dispatch)

    // if exists a history, then show them
    if(typeof JSON.parse(data)[chatHistory] !== 'undefined') {
        return JSON.parse(data)[chatHistory].forEach(message => {
            updateChatHistory(JSON.parse(message), dispatch) 
        })
    }
    
    // // dispatch to redux the updated history chat
    updateChatHistory(JSON.parse(data), dispatch)
}