import * as ChatActionType from '../actionTypes/chatActionsTypes'

const Chat = (state = {chatHistory: [], lastMessage: null, typing: false, textMessage: ''}, action) => {
    switch(action.type) {

        case ChatActionType.WRITE_MESSAGE: {
            return {
                ...state,
                textMessage: action.message
            }
        }

        case ChatActionType.INSERT_EMOJI: {
            return {
                ...state,
                textMessage: state.textMessage.concat(action.emoji)
            }
        }

        case ChatActionType.SEND_MESSAGE: {
            let incomingMessage = action.messageObj

            return {
                ...state,
                chatHistory: [...state.chatHistory, incomingMessage],
                lastMessage: incomingMessage.sendIn,
                typing: incomingMessage.typing
            }
        }

        case ChatActionType.CLEAR_HISTORY: {
            return {
                ...state,
                chatHistory: []
            }
        }
    
        default: {
            return state
        }
    }
}

export default Chat