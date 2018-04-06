import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })
import configureStore from 'redux-mock-store'

import emojilist from '../methods/emojiList'
import EmojiList from '../components/emoji/EmojiList'

describe('EmojiList component', () => {
    let container

    beforeEach(() => {
        const mockStore = configureStore()        
        const store = mockStore()

        container = shallow(<EmojiList store={store}/>)
    })

    it('*** component renders correctly', () => {
        expect(container.length).toEqual(1)
    })

    it('*** loads all emojis', () => {
        expect(container.dive().find('.emoji').length).toEqual(emojilist.length)
    })

    it('*** it have dispatch action', () => {
        expect(container.prop('dispatch').length).toEqual(1)
    })
})