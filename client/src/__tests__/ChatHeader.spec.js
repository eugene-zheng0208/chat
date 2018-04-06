import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

import ChatHeader from '../components/header/ChatHeader'

describe('ChatHeader component', () => {
    
    it('*** component renders correctly', () => {
        const container = mount(<ChatHeader/>)

        expect(container.length).toEqual(1)
        expect(container.find('.chat-header').length).toEqual(1)
    })
})