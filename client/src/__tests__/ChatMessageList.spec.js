import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })
import configureStore from 'redux-mock-store'

import ChatMessageList from '../components/messageList/ChatMessageList'

describe('ChatMessageList component', () => {
    let container
    const sendIn = new Date().toLocaleString("en-US")
    const messages = {
        chatHistory: [
            {typing: true, sendIn, messageType: 'out', message: 'you says'},
            {typing: false, sendIn, messageType: 'in', message: 'robot says'}
        ]
    }

    beforeEach(() => {
        const mockStore = configureStore()        
        const store = mockStore(messages)

        container = shallow(<ChatMessageList store={store}/>)
    })

    it('*** component renders correctly', () => {
        expect(container.length).toEqual(1)
    })

    it('*** have message sent', () => {
        expect(container.prop('chatHistory')[0].typing).toEqual(messages.chatHistory[0].typing)
        expect(container.prop('chatHistory')[0].sendIn).toEqual(messages.chatHistory[0].sendIn)
        expect(container.prop('chatHistory')[0].messageType).toEqual(messages.chatHistory[0].messageType)
        expect(container.prop('chatHistory')[0].message).toEqual(messages.chatHistory[0].message)
    })

    it('*** robot send message', () => {
        expect(container.prop('chatHistory')[1].typing).toEqual(messages.chatHistory[1].typing)
        expect(container.prop('chatHistory')[1].sendIn).toEqual(messages.chatHistory[1].sendIn)
        expect(container.prop('chatHistory')[1].messageType).toEqual(messages.chatHistory[1].messageType)
        expect(container.prop('chatHistory')[1].message).toEqual(messages.chatHistory[1].message)
    })
})