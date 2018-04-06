import * as ChatActionType from '../actionTypes/chatActionsTypes'

export const sendMessage = messageObj => {
    return {
        type: ChatActionType.SEND_MESSAGE,
        messageObj
    }
}

export const clearHistory = () => {
    return {
        type: ChatActionType.CLEAR_HISTORY
    }
}

export const insertEmoji = emoji => {
    return {
        type: ChatActionType.INSERT_EMOJI,
        emoji
    }
}

export const writeMessage = message => {
    return {
        type: ChatActionType.WRITE_MESSAGE,
        message
    }
}