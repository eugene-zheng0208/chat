import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })
import configureStore from 'redux-mock-store'

import HeaderDescription from '../components/header/headerDescription/HeaderDescription'

describe('HeaderDescription component', () => {
    let container
    const initialState = {
        lastMessage: new Date().toLocaleString("en-US"),
        typing: false
    }

    beforeEach(() => {
        const mockStore = configureStore()        
        const store = mockStore(initialState)

        container = shallow(<HeaderDescription store={store}/>)
    })

    it('+++ component renders correctly', () => {
        expect(container.length).toEqual(1)
    })

    it('+++ component prop typing matches with initialState', () => {
        expect(container.prop('typing')).toEqual(initialState.typing)
    })

    it('+++ component prop lastMessage matches with initialState', () => {
        expect(container.prop('lastMessage')).toEqual(initialState.lastMessage)
    })
})