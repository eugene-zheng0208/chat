import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './headerDescription.css'

const HeaderDescription = props => {
    const { lastMessage, typing } = props

    return (
        <div className="chat-header-description">
            <h2 className="userName">Robot Zakus</h2>
            <span className="lastSeen">
                {lastMessage === null ? 'Online' : 
                    // regex old
                    // /((, )|(:\d{1,2} ))/g
                    !typing ?  `Last Message in: ${lastMessage.replace(/((\d{1,2})\/(\d{1,2})\/(\d{4})(, )|(:\d{1,2} ))/g, '$3/$2/$4 ').replace(/\/\//g, '')}` : 'Robot Zakus is typing...'}   
            </span>
        </div>
    )
}

HeaderDescription.propTypes = {
    lastMessage: PropTypes.string,
    typing: PropTypes.bool.isRequired
}

const mapStateToProps = state => {
    return {
        lastMessage: state.lastMessage,
        typing: state.typing
    }
}

export default connect(mapStateToProps)(HeaderDescription)
// DONE